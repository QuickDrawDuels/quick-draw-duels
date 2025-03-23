window.onload = function () {
    const canvas = document.getElementById("drawingBoard");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 400;

    let drawing = false;
    let currentColor = "black";

    canvas.addEventListener("mousedown", () => {
        drawing = true;
        ctx.beginPath();
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener("mousemove", (event) => {
        if (!drawing) return;

        ctx.strokeStyle = currentColor;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    });

    window.changeColor = function (color) {
        currentColor = color;
    };

    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
};
