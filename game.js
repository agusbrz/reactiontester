const widthOfBoard = 0.8 * window.screen.width;
const heightOfBoard = 0.7 * window.screen.height;
const minwidthOfShape = 70;
const maxwidthOfShape = 250;
const minX = (window.screen.width - 0.8 * window.screen.width) / 2;
const maxX = minX + widthOfBoard - 30;
const minY = (window.screen.height - 0.7 * window.screen.height) / 2;
const maxY = minY + heightOfBoard - 30;
const shapebase = document.getElementById("shape").style;

function start() {
  const board = document.getElementById("boardgame").style;

  board.display = "fixed";
  board.width = widthOfBoard + "px";
  board.height = heightOfBoard + "px";
  board.borderColor = "red";
  board.borderWidth = "2px";
  board.borderStyle = "solid";
  board.margin = "auto";

  if (document.getElementById("shape").style.visibility == "hidden")
    document.getElementById("shape").style.visibility = "visible";
  createShape();
}

function stop() {

  document.getElementById("shape").style.visibility = "hidden";
  document.getElementById("infoTime").innerHTML = "Game over";
}

function createShape() {

  document.getElementById("shape").style.display = "block";
  const widthOfShape =
    Math.floor(Math.random() * (maxwidthOfShape - minwidthOfShape)) +
    minwidthOfShape;

  const positionX = Math.floor(Math.random() * (maxX - minX)) + minX;
  const positionY = Math.floor(Math.random() * (maxY - minY)) + minY;

  let top = 0;
  let left = 0;
  if (positionY + widthOfShape > maxY) {
    top = positionY - widthOfShape;
  } else {
    top = positionY;
  }

  if (positionX + widthOfShape > maxX) {
    left = positionX - widthOfShape;
  } else {
    left = positionX;
  }


  if (Math.random() > 0.5) {
    createSquare(widthOfShape, left, top);
  } else {
    createCircle(widthOfShape, left, top);
  }
  countingTime();
}

debugger;

function createCircle(width, posX, posY) {
  shapebase.width = width + "px";
  shapebase.height = width + "px";
  shapebase.borderRadius = "50%";
  shapebase.backgroundColor = getRandomColor();
  shapebase.top = posY + "px";
  shapebase.left = posX + "px";
}

debugger;

function createSquare(width, posX, posY) {
  shapebase.borderRadius = "unset";
  shapebase.width = width + "px";
  shapebase.height = width + "px";
  shapebase.backgroundColor = getRandomColor();
  shapebase.top = posY + "px";
  shapebase.left = posX + "px";
}

debugger;

function countingTime() {

  let start = new Date().getTime();

  document.getElementById("shape").onclick = function () {
    let stop = new Date().getTime();
    document.getElementById("shape").style.display = "none";
    const time = (stop - start) / 1000;

    document.getElementById("infoTime").innerHTML = time + "s.";

    const interval = Math.floor(Math.random() * 1500) + 500;

    setTimeout(createShape, interval);
  };
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}