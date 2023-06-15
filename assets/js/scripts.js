// Add an event listener listening for scroll


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


// Transform translate items on scroll
// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

let item1 = document.getElementById("item1"),
item2 = document.getElementById("item2");

    
let container = document.getElementById("headingContainer")
let rectContainer = container.getBoundingClientRect();

let animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

       

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(item1,lastKnownScrollPosition*.2)
      animate(item2,lastKnownScrollPosition*-.2)
      
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

// element
imagesLoaded( document.querySelector('#main'), function( instance ) {
    setTimeout(function(){
        document.body.classList.add('loaded');
    }, 300);

  });


