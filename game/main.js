const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blocks = [];
const blockSize = 40;
const rows = 8;
const cols = Math.floor(canvas.width / blockSize);

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    blocks.push({ x: x * blockSize, y: canvas.height - (y + 1) * blockSize });
  }
}

function draw() {
  ctx.fillStyle = "#87ceeb"; // sky blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#654321"; // dirt block color
  for (let block of blocks) {
    ctx.fillRect(block.x, block.y, blockSize, blockSize);
  }

  requestAnimationFrame(draw);
}

draw();
