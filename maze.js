const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 0, y: 0 };  // ตำแหน่งของผู้เล่นเริ่มต้น
const cellSize = 50;           // ขนาดของแต่ละช่องในเขาวงกต

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    switch(event.key) {
        case 'ArrowUp':
            if (player.y > 0) player.y -= cellSize;
            break;
        case 'ArrowDown':
            if (player.y < canvas.height - cellSize) player.y += cellSize;
            break;
        case 'ArrowLeft':
            if (player.x > 0) player.x -= cellSize;
            break;
        case 'ArrowRight':
            if (player.x < canvas.width - cellSize) player.x += cellSize;
            break;
    }
    drawMaze();
    drawPlayer();
}

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'lightgrey';
    // วาดพื้นหลังเขาวงกต
}

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, cellSize, cellSize);
}

drawMaze();
drawPlayer();
