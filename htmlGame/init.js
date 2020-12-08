const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50); // (사각형 왼쪽 위 x좌표, y좌표, 너비, 높이)
// ctx.fillStyle = '#F00';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false); // (원중심 x좌표, y좌표, 반지름, 시작 각도, 끝 각도, 그리는 방향 (false 시계 방향, true, 반시계 방향))
// ctx.fillStyle = 'green';
// ctx.fill();
// ctx.closePath();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();

  if(rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  if(x > canvas.width - ballRadius || x < ballRadius) {
    dx = -dx;
  }

  if(y < ballRadius) {
    dy = -dy;
  }
  else if(y > canvas.height - ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
    }
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);