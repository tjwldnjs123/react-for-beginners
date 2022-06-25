let time = 10;

undefined;
setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);

let timer = 180;

setInterval(function () {
  if (timer >= 0) {
    const min = Math.floor(timer / 60);
    const sec = String(timer % 60).padStart(2, "0");
    console.log(min + ":" + sec);
    timer = timer - 1;
  }
}, 1000);
