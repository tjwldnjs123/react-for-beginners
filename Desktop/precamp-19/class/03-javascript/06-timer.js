let isStarted = false;

const random = () => {
  if (isStarted === false) {
    isStarted = true;
    document.getElementById("stop").disabled = false;
    let c = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("number").innerText = c;
    document.getElementById("number").style.color = "#" + c;

    let minute = 180;
    let set;
    set = setInterval(function () {
      let time = document.getElementById("timer");
      if (minute >= 0) {
        const min = Math.floor(minute / 60);
        const sec = String(minute % 60).padStart(2, "0");
        time.innerText = min + ":" + sec;
        minute = minute - 1;
      } else {
        document.getElementById("stop").disabled = true;
        isStarted = false;
        clearInterval(set);
      }
    }, 1000);
  } else {
    console.log("타이머가 이미 작동중입니다.");
  }
};
