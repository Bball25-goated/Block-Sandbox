const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const blockSize = 40;
const rows = 6;
const cols = Math.floor(canvas.width / blockSize);

// Colors for each row (totally different to test visibility)
const rowColors = ["#8B0000", "#FF8C00", "#FFD700", "#228B22", "#1E90FF", "#4B0082"];

function draw() {
  // Sky background
  ctx.fillStyle = "#87ceeb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw blocks
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let blockY = canvas.height - (y + 1) * blockSize;

      ctx.fillStyle = rowColors[y % rowColors.length]; // pick color from list
      ctx.fillRect(x * blockSize, blockY, blockSize, blockSize);

      ctx.strokeStyle = "#000000";
      ctx.strokeRect(x * blockSize, blockY, blockSize, blockSize);
    }
  }

  requestAnimationFrame(draw);
}

draw();
