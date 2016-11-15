// "use strict"

function footerHeight() {
  $(".footer").css("margin-top",
    $(document).height() -
    ($(".header").height() + $(".content").height()
    - $(".footer").height())
  )
}
function contactMap() {
  $(".page-banner").addClass("page-banner-state1");
  $(".contact-map").addClass("contact-map-state1");
  $("a.btn-floating").text("View Map");
  $("a.btn-floating").click(function(e) {
    e.preventDefault();
    $(this).text($(this).text()== "Close Map" ? "View Map" : "Close Map");
    $(".page-banner").toggleClass("page-banner-state2","page-banner-state1").fadeIn('slow');
    $(".contact-map").toggleClass("contact-map-state1").fadeIn('slow');
  });
}

$(document).ready(function() {
  footerHeight();
});
