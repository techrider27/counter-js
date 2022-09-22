let output = 0;
let btn1 = document.getElementById("plus");
let btn2 = document.getElementById("minus");

btn1.addEventListener(
  "click",
  (increment = () => {
    output += 1;
    document.getElementById("out").innerText = output;
    document.getElementById("box").style.backgroundColor = "green";
    document.getElementById("out").style.color = "white";
  })
);

btn2.addEventListener(
  "click",
  (decrement = () => {
    if (output < 1) {
      document.getElementById("out").innertext = output;
      document.getElementById("out").style.color = "black";
      document.getElementById("box").style.backgroundColor = "white";
    } else {
      output -= 1;
      document.getElementById("out").innerText = output;
      document.getElementById("box").style.backgroundColor = "red";
    }
  })
);
