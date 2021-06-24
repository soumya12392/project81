var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
//grey//
ctx.strokeStyle = "#808080";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


ctx.beginPath();
//blue//
ctx.strokeStyle = "#130dd1";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
//black//
ctx.strokeStyle = "#000000";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
//red//
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
//yellow//
ctx.strokeStyle = "#f0a822";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
//green//
ctx.strokeStyle = "#0e7410";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();