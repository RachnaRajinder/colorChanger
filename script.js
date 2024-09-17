const btn = document.querySelectorAll(".box");
const body = document.querySelector("body");

console.log(body);
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.style.backgroundColor;
    body.style.backgroundColor = color;
  });
});
