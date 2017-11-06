---
title: Experiments in P5 drawing
author: alden
type: post
date: 2017-09-18T19:06:11+00:00
url: /2017/09/18/week-1-experiments-in-p5-drawing/
categories:
  - Computational Media

---
I started off by trying to make faces/icons in the style of the Netflix user icons.

<img class="alignnone size-medium wp-image-73" src="http://www.alden.life/wp-content/uploads/2017/09/Netflix-300x300.png" alt="" width="300" height="300" srcset="http://www.alden.life/wp-content/uploads/2017/09/Netflix-300x300.png 300w, http://www.alden.life/wp-content/uploads/2017/09/Netflix-150x150.png 150w, http://www.alden.life/wp-content/uploads/2017/09/Netflix.png 400w" sizes="(max-width: 300px) 100vw, 300px" />

http://alpha.editor.p5js.org/alden/sketches/ByIzAYaq-

Quickly I got bored with that so then I started trying to make patterns with simple shapes that could be optical illusions or tiled as a desktop background&#8230; or a website background 🙂  I used for loops to avoid copy/pasting all my code:

<img class="alignnone size-medium wp-image-74" src="http://www.alden.life/wp-content/uploads/2017/09/Pattern1-300x300.png" alt="" width="300" height="300" srcset="http://www.alden.life/wp-content/uploads/2017/09/Pattern1-300x300.png 300w, http://www.alden.life/wp-content/uploads/2017/09/Pattern1-150x150.png 150w, http://www.alden.life/wp-content/uploads/2017/09/Pattern1.png 400w" sizes="(max-width: 300px) 100vw, 300px" />

http://alpha.editor.p5js.org/alden/sketches/Hyzy-5p9-

This led me to try to recreate this piece by Paul Nasca:

<img class="" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Anomalous_motion_illusion1.png" width="468" height="351" />

Getting somewhere with using random() to change the shape of a black ellipse underneath.  Here is a static capture, in the browser rendering random() makes the implied motion literal.

[<img class="alignnone size-medium wp-image-75" src="http://www.alden.life/wp-content/uploads/2017/09/Nasca-300x300.png" alt="" width="300" height="300" srcset="http://www.alden.life/wp-content/uploads/2017/09/Nasca-300x300.png 300w, http://www.alden.life/wp-content/uploads/2017/09/Nasca-150x150.png 150w, http://www.alden.life/wp-content/uploads/2017/09/Nasca.png 400w" sizes="(max-width: 300px) 100vw, 300px" />][1]

http://alpha.editor.p5js.org/alden/sketches/BJEiS5a5W

I forgot the white part so I did it again, this time changing where the black and white circles are located underneath just slightly using random().

[<img class="alignnone size-medium wp-image-76" src="http://www.alden.life/wp-content/uploads/2017/09/Nasca2-300x300.png" alt="" width="300" height="300" srcset="http://www.alden.life/wp-content/uploads/2017/09/Nasca2-300x300.png 300w, http://www.alden.life/wp-content/uploads/2017/09/Nasca2-150x150.png 150w, http://www.alden.life/wp-content/uploads/2017/09/Nasca2.png 400w" sizes="(max-width: 300px) 100vw, 300px" />][2]

http://alpha.editor.p5js.org/alden/sketches/Bkgjvq69b

I&#8217;m still using random() so I don&#8217;t get the same consistent rotation of underlying colors that are in the Nasca image which removes some of the effect.  I think I could use another loop to control for that rotation. [Here][3] is the code for all of the sketches from this week put together.

**General Computational Motivations:**

In my previous work as a data scientist I was using my computational skillset to observe, document, and categorize humans and human behavior.  My main interest right now is in engaging with and exploring and antagonizing the space between human self-determined individual identities and the identities as created and managed by machine learning algorithmically determined realities.  I have been inspired by the work of Lynn Hershman Leeson; a particular recent work of hers that I&#8217;ve enjoyed is [_Venus of the Anthropocene_][4].  I want to make work this semester that is creepy but fun. Maybe even cute; another example of work that I have really liked is _[Creatures Avoiding ][5][Planks][5] _by Studio Otoro.

 [1]: http://alpha.editor.p5js.org/full/BJEiS5a5W
 [2]: http://alpha.editor.p5js.org/full/Bkgjvq69b
 [3]: https://github.com/miamiww/ComputationalMedia
 [4]: https://www.newyorker.com/goings-on-about-town/art/lynn-hershman-leeson-2
 [5]: http://otoro.net/planks/