/**
 * Created by stepho on 4/13/17.
 */

    $(document).ready(function() {
      /*
      $('#nav').localScroll(800);
       */

      //.parallax(xPosition, speedFactor, outerHeight) options:
      //xPosition - Horizontal position of the element
      //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
      //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

      //Scrolling set up stuff
      // var speedFactor = 0.8;

      /* disabled
      $('#intro').parallax("50%", speedFactor);
      $('#articles').parallax("50%", speedFactor);
      $('#about').parallax("50%", speedFactor);
      $('#boat').parallax("50%", speedFactor);
      */

      /*Code library to run the "read more" feature*/
      $('.reveal').click(function() {
        $(this).slideUp(100);
        $(this).next().slideToggle();
        $(".collapse").slideDown(100);
      });
      $('.collapse').click(function() {
        $(this).slideUp(100);
        $(this).prev().slideToggle();
        $(".reveal").slideDown(100);
      });

      /*Code library carousel*/
      $('.carousel').carousel()

      console.log("finished loading strangewaves.js")
    });



