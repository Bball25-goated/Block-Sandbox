const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw sky
ctx.fillStyle = "#87ceeb";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw test block
ctx.fillStyle = "#654321";
ctx.fillRect(canvas.width / 2 - 20, canvas.height / 2 - 20, 40, 40);
