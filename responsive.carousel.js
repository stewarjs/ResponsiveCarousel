if(document.getElementById('container') !== null) {
    var container = document.getElementById('container'),
        slides = container.getElementsByTagName('picture'),
        pagination = document.createElement('ul'),
        nextLink,
        prevLink,
        thisSlide;

    if (slides.length) {
        for (var i = 0; i < slides.length; i++) {
            if(i != 0) {
                slides[i].style.display = 'none';
            }else{
                slides[i].setAttribute('data-state', 'active');
            }
            var paginationLink = document.createElement('li');
            var url = slides[i].getElementsByTagName('img')[0].src;
            url = url.substr(0, url.length-6);
            url = url + '_s.jpg';
            paginationLink.style.backgroundImage="url(" + url + ")";
            paginationLink.style.backgroundSize="cover";
            if (paginationLink.addEventListener) {
                paginationLink.addEventListener('click', function(event) {
                var index = getIndex(event.target || event.srcElement);
                var imgs = container.getElementsByTagName('picture');
                for (var i = 0; i < imgs.length; i++) {
                    if(i != index){
                       imgs[i].setAttribute('data-state', 'none');
                       imgs[i].style.display = 'none';
                    }else{
                       imgs[i].setAttribute('data-state', 'active');
                       imgs[i].style.display = 'block';
                    }
                }

            });
            } else {
                paginationLink.attachEvent("onclick", function(event) {
                var index = getIndex(event.target || event.srcElement);
                var imgs = container.getElementsByTagName('picture');
                for (var i = 0; i < imgs.length; i++) {
                    if(i != index){
                       imgs[i].setAttribute('data-state', 'none');
                       imgs[i].style.display = 'none';
                    }else{
                       imgs[i].setAttribute('data-state', 'active');
                       imgs[i].style.display = 'block';
                    }
                }

            });
            }
            pagination.appendChild(paginationLink);
            if (slides[i].children[3].addEventListener) {
                slides[i].children[3].addEventListener('load', function() {
                 resize(container);
                });
            } else {
                slides[i].children[3].attachEvent('onload', function() {
                 resize(container);
                });
            }

        }
    }

    function resize(elem) {
        elems = elem.getElementsByTagName('picture');
        if (elems.length) {
            for (var i = 0; i < elems.length; i++) {
                if(elems[i].getAttribute('data-state') == 'active'){
                    var offsetHeight = elems[i].children[3].offsetHeight;
                    elem.style.height = offsetHeight + "px";
                }
            }
        }
    }
    function getIndex(node) {
      var childs = node.parentNode.childNodes;
      for (i = 0; i < childs.length; i++) {
        if (node == childs[i]) break;
      }
      return i;
    }

    function mobileCheck(mobileMedia) {
        if(document.body.offsetWidth <= mobileMedia) {
            if(document.getElementById('next') == null) {
                nextLink = document.createElement('div');
                nextLink.setAttribute("id", "next");
                container.appendChild(nextLink);
                if(document.getElementById('next') !== null) {
                    nextLink = document.getElementById('next')
                    nextLink.addEventListener('click', function() {switchSlides('left')});
                }
            }
            if(document.getElementById('prev') == null) {
                prevLink = document.createElement('div');
                prevLink.setAttribute("id", "prev");
                container.insertBefore(prevLink, container.firstChild);
                if(document.getElementById('prev') !== null) {
                    prevLink = document.getElementById('prev')
                    prevLink.addEventListener('click', function() {switchSlides('right')});
                }
            }
        }
    }

    function swipedetect(el, callback){

     var touchsurface = el,
     swipedir,
     startX,
     startY,
     distX,
     distY,
     threshold = 80, //required min distance traveled to be considered swipe
     restraint = 100, // maximum distance allowed at the same time in perpendicular direction
     allowedTime = 300, // maximum time allowed to travel that distance
     elapsedTime,
     startTime,
     handleswipe = callback || function(swipedir){}

     touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      //e.preventDefault()

     }, false)

     touchsurface.addEventListener('touchmove', function(e){
      //e.preventDefault() // prevent scrolling when inside DIV
     }, false)

     touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
       if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
        swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
       }
       else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
        swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
       }
      }
      handleswipe(swipedir)
      //e.preventDefault()
     }, false)
    }

    function switchSlides(direction) {
        var slidePosition;
        //direction contains either "none", "left", "right", "top", or "down"
        if (direction == 'left') {
            if (slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if(slides[i].getAttribute('data-state') == 'active'){
                        slidePosition = i;
                        slides[i].setAttribute('data-state', 'none');
                        slides[i].style.display = 'none';
                    }
                }
                slidePosition = slidePosition + 1;
                if(slidePosition >= slides.length){
                    slides[0].style.display = 'block';
                    slides[0].setAttribute('data-state', 'active');
                } else {
                    slides[slidePosition].style.display = 'block';
                    slides[slidePosition].setAttribute('data-state', 'active');
                }

            }
        }
        if (direction == 'right') {
            if (slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if(slides[i].getAttribute('data-state') == 'active'){
                        slidePosition = i;
                        slides[i].setAttribute('data-state', 'none');
                        slides[i].style.display = 'none';
                    }
                }
                slidePosition = slidePosition - 1;
                if(slidePosition < slides.length){
                    slides[0].style.display = 'block';
                    slides[0].setAttribute('data-state', 'active');
                } else {
                    slides[slidePosition].style.display = 'block';
                    slides[slidePosition].setAttribute('data-state', 'active');
                }

            }
        }

    }

    function imageLink(elem) {
        var slideInstance = elem;
        var slideLocation = slideInstance.getAttribute('data-link');
            if(slideLocation != undefined){
                window.open(slideLocation);
            };
    }


    window.onresize=function(){
        resize(container);
        mobileCheck(552);
    }

    container.appendChild(pagination);
    resize(container);
    mobileCheck(552);


    for (var i = 0; i < slides.length; i++) {
        thisSlide = slides[i].getElementsByTagName('img')[0];
        swipedetect(thisSlide, function(swipedir){switchSlides(swipedir);});
        if (slides[i].addEventListener) {
            slides[i].addEventListener('click', function(event) {
                imageLink(event.target || event.srcElement);
            });
        } else {
            slides[i].attachEvent('onclick', function(event) {
                imageLink(event.target || event.srcElement);
            });
        }

    }
}
