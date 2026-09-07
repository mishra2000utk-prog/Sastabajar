document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("धन्यवाद! आपका चयन दर्ज कर लिया गया है।");
    });
  });
});
