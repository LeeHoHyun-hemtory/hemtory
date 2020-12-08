let brickRowCount = 3;
let brickColumnCount = 7;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 60;

const bricks = [];

for(let c = 0; c < brickColumnCount; c++) {
  bricks.push([]);

  for(let r = 0; r < brickRowCount; r++) {
    const brickX = brickOffsetLeft + (brickWidth + brickPadding) * c;
    const brickY = brickOffsetTop + (brickHeight + brickPadding) * r;
    bricks[c][r] = { x: brickX, y: brickY, break: true };
  }
}

function drawBricks() {
  for(let c = 0; c < brickColumnCount; c++) {
    for(let r = 0; r < brickRowCount; r++) {
      if(bricks[c][r].break) {
        ctx.beginPath();
        ctx.rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}