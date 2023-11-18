---
title: "Blog #1 PFJ Image Editor"
---
<script src="../script.js"></script>
<a style="font-size: calc(1rem + 4px); visibility: hidden; margin-left: -25px;">✧</a>
<span id="Index" style="width: 5px; display: inline-block;"></span>
<a class="link" style="" href="../index.html">Index</a>
<span id="Blog" style="width: 5px; display: inline-block;"></span>
<a class="link" style="" href="../blogs.html">Blog</a>
<span id="Software" style="width: 5px; display: inline-block;"></span>
<a class="link" style="" href="../software.html">Software</a>
<span id="Games" style="width: 5px; display: inline-block;"></span>
<a class="link" style="" href="../games.html">Games</a>
<span id="Photography" class="link-nonactive"></span>
<a style="">Photography</a>
<span id="CV" style="width: 5px; display: inline-block;"></span>
<a class="link" style="" href="../cv.html">CV</a>
<hr style="margin: 24px 0px 24px 0px;"></hr>

<!-- pandoc -s --mathjax -c blog_style.css blog_1.md -o blog_1.html -->
# Post \#1: PFJ Image Editor

Published: June 30, 2023

![A gif of me adding filters to an image using PFJ Image Editor](../imgs\\pfj_gif.gif#pfj_image "Me adding filters to an image")\

Hello! In this blog post I wanted to talk a bit about an image editor software program that I made recently, mainly what it does and my motivation behind developing it. Basically with this program, PFJ Image Editor, you're able to apply different filters and effects to images. For example, you can apply brightness, contrast, saturation, mirroring,  threshold etc.. You're able to control the intensity of each filter and you can apply multiple filters on an image at once if you want. There's also some presets you can use that have preset values for the effects. It's pretty easy to create cool looking edits of images this way. You're also able to analyze the image, like looking at how the color channels of the image are distributed using a histogram plot. This way you can see how different filters alter an image's pixel values in real time.

Back in April or May, we had a unit on pixels and image filters in my computer science class. We did some assignments like coding our own effects and seeing how they'd affect images. Stuff like brightness, grayscale, isolating color channels. We actually used software made in Java to analyze and display the images and filters we made. I'm pretty sure the software used Java's Swing API for graphics and GUI. There was lots of Java style sliders, buttons, text fields, scroll bars, things like that. I was really inspired by this program, (especially because we had the source code in Java and were able to see how it worked!), so I decided to make my own image editing program, although not using Java Swing but another graphics library called Processing.

![An Image of a sunflower with various filters applied](../imgs/sunflower.png#pfj_image_2 "An image of a sunflower with various filters applied")\

Probably the hardest part of development was finding a way to apply filters to an image without causing a massive FPS drop. Some filters are more preformance intensive than others. For example, brightness and threshold aren't too bad, but bloom and blur can be pretty slow depending on their intensity. My goal was to have the filter "load in" and take its time, as opposed to craming in all the calculations into a single frame and causing a massive lag spike. Sometimes you may see the image take a few moments to apply all its filters completely, this is to insure a constant and smooth FPS! Besides that I also spent some time messing around with all the combinations of filters with images and making presets. It was actually really fun. I'd say my favorite filters to use are bloom and a combination of color threshold and mirroring. I also find the effects look especially cool on a nature type image with trees and the sky and clouds with lots of contrasting colors.

Anyway that's a quick summary of what the software is and why I made it. As always if you have questions or feedback please contact me at: [maxcontact5@keemail.me](mailto:maxcontact5@keemail.me) and if you're interested in downloading or learning more, check the github here: [PFJ Image Editor Repo](https://github.com/Max-7777/PFJ-image-editor). Thanks for reading! 