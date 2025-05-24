const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const blockSize = 40;
const rows = 6;
const cols = Math.floor(canvas.width / blockSize);

function draw() {
  // Sky background
  ctx.fillStyle = "#87ceeb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw rows of blocks (like ground)
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let blockY = canvas.height - (y + 1) * blockSize;
      
      // Alternate color every other row for block definition
      if (y % 2 === 0) {
        ctx.fillStyle = "#8B4513"; // dark brown
      } else {
        ctx.fillStyle = "#A0522D"; // lighter brown
      }

      ctx.fillRect(x * blockSize, blockY, blockSize - 1, blockSize - 1); // little gaps for block outlines
    }
  }

  requestAnimationFrame(draw);
}

draw();
