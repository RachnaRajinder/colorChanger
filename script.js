const btn = document.querySelectorAll(".box");
const body = document.querySelector("body");

console.log(body);
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);

    if (e.target.id == "color_1") {
      body.style.backgroundColor = "#FF00FF";
    }
    else if (e.target.id == "color_2") {
      body.style.backgroundColor = "#00FFFF";
    }
    else if (e.target.id == "color_3") {
      body.style.backgroundColor = "#000000";
    }
    else if (e.target.id == "color_4") {
      body.style.backgroundColor = "#2f0be3";
    }
  });
});
