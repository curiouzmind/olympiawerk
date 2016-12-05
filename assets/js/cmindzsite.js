//footer height
function footerHeight() {
  $(".footer").css("margin-top",
    $(document).height() -
    ($(".header").height() + $(".content").height()
    - $(".footer").height())
  )
}
function playPause() {
  var myVideo = document.getElementById("video-bg-elem");
  if (myVideo.paused) {
      myVideo.play();
  } else {
      myVideo.pause();
  }
}
function contactMap() {
  $(".page-banner").addClass("page-banner-state1");
  $(".contact-map").addClass("contact-map-state1");
  // $("a.btn-floating").text("View Map");
  $(".page-banner").click(function(e) {
    e.preventDefault();
    // $(this).text($(this).text() == "Close Map" ? "View Map" : "Close Map");
    $(".page-banner").toggleClass("page-banner-state2","page-banner-state1").fadeIn('slow');
    $(".contact-map").toggleClass("contact-map-state1").fadeIn('slow');
  });
  var amountScrolled = 250;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('a.btn-floating').fadeIn('fast');
    } else {
      $('a.btn-floating').fadeOut('fast');
    }
  });
}
