const random = () => {
  let c = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("number").innerText = c;
  document.getElementById("number").style.color = "#" + c;
};
