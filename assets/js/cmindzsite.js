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
