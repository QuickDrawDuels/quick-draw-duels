const canvas = document.getElementById("drawingBoard");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

let drawing = false;

// Start drawing when mouse is pressed
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw as mouse moves
canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Stop drawing when mouse is released
canvas.addEventListener("mouseup", () => {
    drawing = false;
});
