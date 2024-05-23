// Define a Circle class to represent each circle on the canvas
class Circle {
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public velocityY: number,
        public color: string
    ) {}
}

// Initialize canvas and context
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define gravity settings
const gravity = 0.2;
const bounceFactor = 0.7;

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Array to store all circles
const circles: Circle[] = [];

// Function to update the position of circles
function update(deltaTime: number) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update circles
    circles.forEach(circle => {
        // Apply gravity
        circle.velocityY += gravity;

        // Update position
        circle.y += circle.velocityY;

        // Check collision with bottom
        if (circle.y + circle.radius >= canvas.height) {
            circle.y = canvas.height - circle.radius;
            circle.velocityY *= -bounceFactor; // Reverse velocity and dampen
        }

        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();
    });
}

// Function to handle click event for spawning circles
function handleClick(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    const radius = 20;
    const velocityY = 0; // initial velocity

    // Create new circle and add to array
    const newCircleColor = getRandomColor();
    circles.push(new Circle(x, y, radius, velocityY, newCircleColor));

    // Change button color to the new circle's color
    const clearButton = document.getElementById('clearButton')!;
    clearButton.style.backgroundColor = newCircleColor;
}

// Function to clear all circles
function clearCircles() {
    circles.length = 0; // Clear the array

    // Reset button color to default
    const clearButton = document.getElementById('clearButton')!;
    clearButton.style.backgroundColor = '#ff6f61';
}

// Event listener for click
canvas.addEventListener('click', handleClick);

// Event listener for clear button
const clearButton = document.getElementById('clearButton')!;
clearButton.addEventListener('click', clearCircles);

// Game loop
let lastTime = 0;
function tick(currentTime: number) {
    const deltaTime = currentTime - lastTime;
    update(deltaTime);
    lastTime = currentTime;
    requestAnimationFrame(tick);
}

// Start game loop
requestAnimationFrame(tick);
