const changeFocus1 = () => {
  const phone1 = document.getElementById("phone1").value;

  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
};

const changeFocus2 = () => {
  const phone1 = document.getElementById("phone2").value;

  if (phone1.length === 4) {
    document.getElementById("phone3").focus();
  }
};
