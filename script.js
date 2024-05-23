// Define a Circle class to represent each circle on the canvas
var Circle = /** @class */ (function () {
    function Circle(x, y, radius, velocityY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityY = velocityY;
        this.color = color;
    }
    return Circle;
}());
// Initialize canvas and context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Define gravity settings
var gravity = 0.2;
var bounceFactor = 0.7;
// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Array to store all circles
var circles = [];
// Function to update the position of circles
function update(deltaTime) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Update circles
    circles.forEach(function (circle) {
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
function handleClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    var radius = 20;
    var velocityY = 0; // initial velocity
    // Create new circle and add to array
    var newCircleColor = getRandomColor();
    circles.push(new Circle(x, y, radius, velocityY, newCircleColor));
    // Change button color to the new circle's color
    var clearButton = document.getElementById('clearButton');
    clearButton.style.backgroundColor = newCircleColor;
}
// Function to clear all circles
function clearCircles() {
    circles.length = 0; // Clear the array
    // Reset button color to default
    var clearButton = document.getElementById('clearButton');
    clearButton.style.backgroundColor = '#ff6f61';
}
// Event listener for click
canvas.addEventListener('click', handleClick);
// Event listener for clear button
var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCircles);
// Game loop
var lastTime = 0;
function tick(currentTime) {
    var deltaTime = currentTime - lastTime;
    update(deltaTime);
    lastTime = currentTime;
    requestAnimationFrame(tick);
}
// Start game loop
requestAnimationFrame(tick);
