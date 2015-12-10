# ionic-video-link
A directive for Ionic that smoothly launches a video and plays it automatically when clicked by the user.  See the original blog post about this [on my website](http://mwiebe.com/blog/posts/ionic-video-link/).  Leave me a comment! :)

#Demonstration
Here's what it will look like in action:

![ionic-video-link in action](http://mwiebe.com/images/posts/2015/ionic-video-link.gif)

Here's a sample of what I used for the list above:

```html
<ionic-video-link video-src="assets/Getting Started.mp4" video-name="getting-started">
    <ion-item>
        <i class="icon ion-ios-play-outline"></i>
        &nbsp;Getting Started
    </ion-item>
</ionic-video-link>
```

The directive preserves whatever you have inside the ionic-video-link tag so you can use it for any sort of link!  Very handy.

# Installation

Download the repo, store the html partial and the .js file somewhere in your www/app folder (or wherever you prefer), and reference them in your index.html.

# Known Issues
Only tested on iOS.
