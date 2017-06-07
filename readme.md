# MotionPlate

Another great idea by Brennan Gleason

## Setup

Add ScrollMagic script

```<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>```

Add motionplate.js

```<script src="motionplate.js"></script>```

Add motionplate.css

```<link rel="stylesheet" media="all" href="motionplate.css">```

```<link rel="stylesheet" media="all" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">```


Add attributes to your elements:

```<div class="box" mp-animated="fadeIn" mp-triggerhook="onEnter" mp-offset="180" mp-reverse="false" mp-duration="0.5s" mp-delay="300ms">Hello World</div>```

The available attributes are:
* mp-animated - accepts any css animation class from animate.css (https://daneden.github.io/animate.css)
* mp-triggerHook - defines the ScrollMagic trigger hook (http://scrollmagic.io/docs/ScrollMagic.Scene.html#triggerHook)
* mp-offset - defines the ScrollMagic offset (http://scrollmagic.io/docs/ScrollMagic.Scene.html#offset)
* mp-reverse - defines the ScrollMagic reverse (http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse)
* mp-duration - defines the animation duration, in either seconds or milliseconds
* mp-delay - defines the animation delay, in either seconds or milliseconds