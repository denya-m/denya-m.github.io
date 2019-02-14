var audio = $ ("#sound")[0];
$("#container").click(function() {
  audio.play();
}).mouseleave(function() {
  audio.pause();
});

if($(window).width() > 740){
  var audio = $("#sound")[0];
$("#container").mouseenter(function() {
  audio.play();
}).mouseleave(function() {
  audio.pause();
});
}