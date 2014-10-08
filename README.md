Responsive Carousel
==================

Originally created this script (which is on going) for use at work because I needed a responsive carousel using the HTML5 picture element but didn't have/couldn't find anything that fit my use case.

This carousel is NOT dependent upon jQuery and is compatible with IE8+, Firefox, and Chrome.
Touch events are supported, but currently there are no transitions between slides (picture elements).
Slides can link to external content by using the data-link attribute on the image tag.

Since this carousel works down to IE8, picturefill is needed and the example HTML syntax reflects that.

Using
=====

Create a reference to the Javascript file:
```html
<script src="responsive.carousel.js"></script>
```
Place the following in your HTML document where you want the carousel to be:
```html
<div id="container">
  <picture>
  	<!--[if IE 9]><video style="display: none;"><![endif]-->
  	<source srcset="small.jpg" media="(max-width: 400px)">
  	<source srcset="medium.jpg" media="(max-width: 800px)">
      <source srcset="large.jpg">
  	<!--[if IE 9]></video><![endif]-->
  	<img srcset="medium" alt="Generic Image">
	</picture>
    
  <picture>
  	<!--[if IE 9]><video style="display: none;"><![endif]-->
  	<source srcset="small.jpg" media="(max-width: 400px)">
  	<source srcset="medium.jpg" media="(max-width: 800px)">
      <source srcset="large.jpg">
  	<!--[if IE 9]></video><![endif]-->
  	<img srcset="medium" alt="Generic Image">
	</picture>
</div>
```
Place the following in your CSS stylesheet:
```css
#container {
    position: relative;
    height: 394px;
}

#container ul {
    bottom: 0;
    top: initial;
    right: 20px;
    width: auto;
    margin: 0;
    padding: 0;
    position: absolute;
    list-style: none;
}

#container ul li {
    float: left;
    width: 100px;
    height: 30px;
    margin: 0 10px 10px;
    background-color: #F7F7F7;
    padding: 5px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 0px 10px rgba(0,0,0,0.55);
    -khtml-box-shadow: 0px 0px 10px rgba(0,0,0,0.55);
    -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.55);
}

#container img {
    top: 0;
    left: 0;
    max-width: 100%;
    position: absolute;
}

#container ul li:hover {
    border: 2px solid #C74118;
    padding: 4px;
}
```
