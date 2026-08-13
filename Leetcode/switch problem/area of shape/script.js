let prompt = require("prompt-sync")();
let shape = prompt("Enter the shape ").toLowerCase();
let area = 0;
switch (shape) {
  case "triangle":
    let base = Number(prompt("Enter the Base of traingle ").toLowerCase());
    let height = Number(prompt("Enter the height of traingle ").toLowerCase());
    if (base && height) {
      area = (1 / 2) * base * height;
    } else {
      console.error("enter base and height in number");
    }
    break;
  case "circle":
    let radius = Number(prompt("Enter the width of circle ").toLowerCase());
    area = radius * radius;
    break;

  case "rectangle":
    let width = Number(prompt("Enter the width of rectangle ").toLowerCase());
    let length = Number(prompt("Enter the length of rectangle ").toLowerCase());
    area = width * length;
    break;

  default: console.error("enter valid shape ");
  
    break;
}
console.log(area);
