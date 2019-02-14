var audio = $ ("#sound")[0];
$("#container").click(function() {
  audio.play();
}).mouseleave(function() {
  audio.pause();
});