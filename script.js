const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let currentColor = "black";

// Get correct mouse position relative to canvas
function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

// Start drawing
canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    const pos = getMousePos(event);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

// Draw lines
canvas.addEventListener("mousemove", (event) => {
    if (!drawing) return;
    const pos = getMousePos(event);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
});

// Change color function
function changeColor(color) {
    currentColor = color;
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
