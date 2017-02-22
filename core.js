function move() {
  var progress = document.getElementById("progressbar");
  var strong = document.getElementById("myStrong");
  var width = 0;
  var id = setInterval(frame, 50);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      progress.value = width;
      myStrong.innerHTML = width;
    }
  }
}