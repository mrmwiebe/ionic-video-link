angular.module('ionicVideoLink', ['ionic'])
.directive('ionicVideoLink', ['$window', '$document', function ($window, $document) {

    return {
        restict: 'A',
        transclude: true,
        scope: {
            videoSrc: '@videoSrc',
            videoName: '@videoName',
            onVideoComplete: '&'
        },
        templateUrl: 'app/app/partials/directive-video.html',

        link: function(scope, element) {

            //need to double up on these for some items like ion-item
            //element.removeAttr('ionic-video-link'); // necessary to avoid infinite compile loop
            element.attr('ng-click', 'playVideo(\''+scope.videoName+'\')');

            //When things start up, lets make a fader object
            //But only if one doesn't exist yet so we can have multiples
            if($('#ionicVideoFader')) {
                //A fader doesn't exist yet
                $('body').prepend('<div' +
                ' id="ionicVideoFader"' +
                ' style="' +
                ' background: black;' +
                ' position: fixed;' +
                ' width: 100%;' +
                ' height: 100%;' +
                ' z-index: 100;' +
                ' display: none;' +
                ' "' +
                '></div>');
            }

            var videoHtml = $('<video id="'+scope.videoName+'" class="display-none"><source src="'+scope.videoSrc+'" type="video/mp4"></source></video>');
            videoHtml.insertAfter($(element));

            var thisVideo = videoHtml.get(0);
            console.log('ionicVideoLink video name ', thisVideo);

            thisVideo.addEventListener('webkitendfullscreen', scope.endVideo, false);
            thisVideo.addEventListener('ended', scope.endVideo, false);

        },

        controller: function($scope, $element) {

            console.log('ionicVideoLink video name ', $scope.videoName);

            $scope.playVideo = function(id) {
                $('#ionicVideoFader').fadeIn(500, function(){
                    //Play the video
                    console.log('ionicVideoLink playing video ' + id);
                    console.log('ionicVideoLink playing video jquery ' + $('#' + id).get(0));
                    $('#' + id).get(0).play();
                    //$scope.endVideo();
                });
            }

            $scope.endVideo = function() {
                if (typeof $scope.onVideoComplete == 'function') {
                    $scope.onVideoComplete();
                }

                $('#ionicVideoFader').delay(250).fadeOut(500, function(){
                    console.log('ionicVideoLink done playing video');
                });
            }

        }

    }
}]);
