console.log("Yolo Maniolo");


const c = document.querySelector("#myCanvas");

let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();