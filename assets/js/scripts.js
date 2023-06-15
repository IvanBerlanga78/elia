//Helper Functions
//https://ultimatecourses.com/blog/javascript-hasclass-addclass-removeclass-toggleclass

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// Add an event listener listening for scroll

/*
window.addEventListener("scroll", blurContent);

function blurContent() {

  let content =  document.getElementById('hero');
  let offset = content.getBoundingClientRect();
  let scrolled = document.scrollingElement.scrollTop;

  let position = offset.top;
  let pixs = scrolled / 200;

  if(scrolled > position + 100){
    content.style.filter= "blur("+pixs+"px)";
  }
  
}
*/

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}




/** ---------------------------- //
 *  @group viewport trigger script 
 * for adding or removing classes from elements in view within viewport
*/
  
var animationElementsHTML = document.getElementsByClassName('scrollH');
var animationElements = Array.from(animationElementsHTML);

// ps: Let's FIRST disable triggering on small devices!
var isMobile = window.matchMedia("only screen and (max-width: 768px)");
if (isMobile.matches) {
    animationElements.removeClass('animation-element');
}



$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.scrollH');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-element');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});






// Transform translate items on scroll
// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

let item1 = document.getElementById("item1"),
item2 = document.getElementById("item2"),
item3 = document.getElementById("scrollDown"),
featHead = document.getElementsByClassName('in-view');

let d = document.querySelector("#scrollDown");

/*
let container = document.getElementById("headingContainer")
let rectContainer = container.getBoundingClientRect();
*/

let animateHor = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

let animateVer = (element,position) => {
    element.style.transform = `translateY(${position}px)`
}        


document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    window.requestAnimationFrame(function() {
        if(isInViewport(d)===true) {
            animateHor(item1,lastKnownScrollPosition*.2)
            animateHor(item2,lastKnownScrollPosition*-.2)
            animateVer(item3,lastKnownScrollPosition*-.2)            
        }
 
      });
});

// Parallax with Rellax

  // Also can pass in optional settings block
  
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });



//Intro screen

imagesLoaded( document.querySelector('#main'), function( instance ) {
    setTimeout(function(){
        document.body.classList.add('loaded');
    }, 300);

  });

// Hack to include contact to the height of the main page

document.body.style.height = document.getElementById("wrap").clientHeight + 400 + 'px';


