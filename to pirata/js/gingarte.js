// confirm("Ready to learn about webify?  Click OK");
// confirm("Are you having fuuuuuuun?");

// ALL FUNCTIONS LUMPED TOGETHER??
var main = function() {

// TOGGLING THE MOBILE MENU
$(".menu-icon").click(function() {
  $(".dropdown").toggle();
});



  // TOGGLING THE BRAZIL SECTION
  $(".toggle-brazil").click(function() {
    $(".brazil").toggle();
  });
  // TOGGLING THE GROUP SECTION
  $(".toggle-group").click(function() {
    $(".group").toggle();
  });
  // TOGGLING THE CHICAGO SECTION
  $(".toggle-chicago").click(function() {
    $(".chicago").toggle();
  });


  // TOGGLING THE CLASS LOCATIONS
  $("#wt").click(function() {
    $("#wt-info").toggle();
  });

  $("#hp").click(function() {
    $("#hp-info").toggle();
  });

  $("#ls").click(function() {
    $("#ls-info").toggle();
  });

  $("#cl").click(function() {
    $("#cl-info").toggle();
  });

}


/* --- TRIED THIS, DIDN'T WORK
  $(".menu-bar").scrollTop ( 300 , function() {
    $( this ).toggleClass("fixed-bar");
  });
--- */


/* --- TRIED THIS, DIDN'T WORK
  var menubar = $(".menu-bar");
  var watcher = scrollMonitor.create( menubar );
  watcher.lock();

  watcher.stateChange(function() {
    $(menubar).toggleClass(".fixed-bar", this.isAboveViewport)
  });
-------- */

  /* ------- MENU BAR ON MOBILE: TOGGLING BETWEEN REGULAR BAR AND FIXED TO TOP BAR
  $(".menu-bar").click(function() {
    $(this).toggleClass("fixed-bar");
  });-------- */

  /* ------- CURRENTLY TESTING THIS ... (ABOUT PAGE TOGGLES DON'T WORK IF THIS IS ACTIVE)
  $(".menu-bar").scrollTop(); // returns pixel value at menubar
  $(window).scroll(function(){
    $(".menu-bar").toggleClass("fixed-bar");
------- */

  /* ------- THIS TOGGLES THE MENU POSITION EVERYTIME A SCROLL IS DETECTED.
  $(".menu-bar").scrollTop(600); // returns pixel value at menubar
  $(window).scroll(function(){
    $(".menu-bar").toggleClass("fixed-bar");
  });-------- */



  /* ------- onscroll JS didn't work
    $(".menu-bar").onscroll=function () {
    $(".menu-bar").toggleClass("fixed-bar");
    }
    --------- */


  /* --------- on scroll EVENT LISTENER.  didn't work
  document.getElementById(".menu-bar").addEventListener("scroll", togmenu);

  function togmenu () {
    $(".menu-bar").toggleClass("fixed-bar");
  }
  --------- */


// SMOOTH SCROLLING TO ANCHORS ON PAGE
// snippet from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// HIDE TOPBAR (INLUDING NAV) AFTER TWO SECONDS, ONLY ON MOBILE???

// ALSO HIDE IT (INLUDING NAV) ON CLICK OF NAV.



$(document).ready(main);
