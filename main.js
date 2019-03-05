var allButtons = $("#buttons > button");
console.log(allButtons);
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on("click", function(x) {
    var index = $(x.currentTarget).index();
    var px = index * -300;
    $(images).css({
      transform: "translateX(" + px + "px)"
    });
    n = index;
    activeButton(allButtons.eq(n % size));
  });
}

var n = 0;
var size = allButtons.length;
playSlide(n % size)

var timerId = setTimer()


$(".window")
  .on("mouseenter", function() {
    window.clearInterval(timerId);
  })
  .on("mouseleave", function() {
    timerId = setTimer()
  });
  


function setTimer() {
    return setInterval(() => {
        n += 1;
        playSlide(n % size)
      }, 1000);
}
function activeButton($button) {
  $button.addClass("red").siblings(".red").removeClass("red");
}
function playSlide(index){
    allButtons.eq(n % size).trigger("click");
}
