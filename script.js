const canvas = document.getElementById('drawingBoard');
const ctx = canvas.getContext('2d');

// Set initial canvas size
canvas.width = 800;
canvas.height = 400;

// Drawing settings
let drawing = false;
let currentColor = 'black';

// Start drawing
canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Change color
function changeColor(color) {
    currentColor = color;
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
