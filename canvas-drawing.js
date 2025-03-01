document.addEventListener("DOMContentLoaded", () => {
  main();
});

let moving = false;

let moveCallback = null;

let timeSinceLastFrame = 0;

let deltaTime = 0;

let accumulatedFrames = 0;

function main(){

  const canvas = document.getElementById("myCanvas");

  if ( !canvas?.getContext ) { showError('canvas'); return; }

  const context2d = canvas.getContext('2d');

  if ( !context2d ) { showError('context 2d'); return; }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.style.padding = '0px';
  document.body.style.margin = '0px';

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context2d.fillStyle = "green";
    context2d.fillRect(0, 0, canvas.width, canvas.height);
  });

  setupEvents(canvas);

  

  timeSinceLastFrame = Date.now();

  setInterval(drawLoop, 0, context2d, canvas);

  //setInterval(() => {console.log(accumulatedFrames); accumulatedFrames = 0;}, 1000);

}

function drawLoop(context2d, canvas){



  // deltaTime = Date.now() - timeSinceLastFrame;

  // handleEvents(eventQueue, canvas);

  // eventQueue.queue = [];

  // camera.turnCamera(deltaTime);

  // camera.moveCamera(deltaTime);

  // let cameraFrame = vertexStorage.elements.map(vertex => convertToCameraFrame(vertex));

  // let projectedVertices = cameraFrame.map(vertex => projectVertex(vertex));

  // cameraFrame = null;

  // let screenCoordinates = projectedVertices.map(vertex => getScreenCoordinate(canvas.width, canvas.height, ...vertex));

  // projectedVertices = null;

  // context2d.fillStyle = "green";
  // context2d.fillRect(0, 0, canvas.width, canvas.height);

  // context2d.fillStyle = "black";
  // for(let i = 0; i < screenCoordinates.length; i += 3){
  //   drawTriangle(context2d, rgb(0, 0, 0), [screenCoordinates[i], screenCoordinates[i+1], screenCoordinates[i+2]]);
  // }

  // context2d.fillStyle = "red";
  // screenCoordinates.map(vertex2d => context2d.fillRect(vertex2d[0] - 5, vertex2d[1] - 5, 10, 10));

  // screenCoordinates = null;

  // timeSinceLastFrame = Date.now();

  // accumulatedFrames++;

}
