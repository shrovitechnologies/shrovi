
function initMap() {
 const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.153226, lng: 72.942137},
    zoom: 8
  });
  const marker=new google.maps.Marker({
      position:{lat: 19.153226, lng: 72.942137},
      map:map
  })
}

window.addEventListener('scroll',function() {
   
  if(window.scrollY > 150) { 
      document.querySelector('#navbar').style.opacity=0.9;
  } else {
    document.querySelector('#navbar').style.opacity=1;
  }
});




// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });