/* 
   Filename: advanced_data_visualization.js
   Description: This code demonstrates advanced data visualization techniques using JavaScript and HTML Canvas.
*/

// Create a canvas element
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

// Define some data for visualization
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var barWidth = 40;
var maxDataValue = Math.max(...data);

// Function to calculate the y-coordinate based on data value
function getYCoordinate(value) {
  return canvas.height - ((value / maxDataValue) * (canvas.height - 50));
}

// Function to draw the bars
function drawBars() {
  for (var i = 0; i < data.length; i++) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(i * (barWidth + 10), getYCoordinate(data[i]), barWidth, canvas.height - getYCoordinate(data[i]));
  }
}

// Function to draw the axes
function drawAxes() {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  // X-axis
  ctx.beginPath();
  ctx.moveTo(50, canvas.height - 25);
  ctx.lineTo(canvas.width - 50, canvas.height - 25);
  ctx.stroke();

  // Y-axis
  ctx.beginPath();
  ctx.moveTo(50, 25);
  ctx.lineTo(50, canvas.height - 25);
  ctx.stroke();

  // Y-axis arrow
  ctx.beginPath();
  ctx.moveTo(45, 30);
  ctx.lineTo(50, 25);
  ctx.lineTo(55, 30);
  ctx.stroke();

  // X-axis arrow
  ctx.beginPath();
  ctx.moveTo(canvas.width - 55, canvas.height - 30);
  ctx.lineTo(canvas.width - 50, canvas.height - 25);
  ctx.lineTo(canvas.width - 55, canvas.height - 20);
  ctx.stroke();

  // X-axis labels
  ctx.font = "14px Arial";
  ctx.fillStyle = "black";
  for (var i = 0; i < data.length; i++) {
    ctx.fillText(i + 1, (i * (barWidth + 10)) + 50 + (barWidth / 2), canvas.height - 10);
  }

  // Y-axis labels
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (var i = 0; i < maxDataValue; i += 10) {
    ctx.fillText(i, 40, getYCoordinate(i));
  }
}

// Function to draw the legend
function drawLegend() {
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = "14px Arial";

  for (var i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(600, 50 + i * 20, 15, 15);
    ctx.fillStyle = "black";
    ctx.fillText("Data " + (i + 1), 625, 60 + i * 20);
  }
}

// Function to draw the entire visualization
function drawVisualization() {
  drawAxes();
  drawBars();
  drawLegend();
}

// Call the drawVisualization function to display the visualization
drawVisualization();