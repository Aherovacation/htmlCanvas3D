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

  // window.addEventListener('resize', () => {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   context2d.fillStyle = "green";
  //   context2d.fillRect(0, 0, canvas.width, canvas.height);
  //   drawVertex2D(context2d, screenCoordinates);
  // });

  //setupEvents(context2d, canvas, eventQueue);

  // for(let i = 0; i < 1000; i++){
  //   vertexStorage.vertices.push(new Vertex(
  //     [5*Math.random(), 5*Math.random(), 5*Math.random()],
  //     [255*Math.random(), 255*Math.random(), 255*Math.random()],
  //     1,
  //   ));
  // }

  timeSinceLastFrame = Date.now();

  //setInterval(drawLoop, 0, context2d, canvas, eventQueue);

  //setInterval(() => {console.log(accumulatedFrames); accumulatedFrames = 0;}, 1000);

  vertices = [

    new Vertex([15,15,15]),
    new Vertex([15,7.5,15]),
    new Vertex([15,0,15]),
    new Vertex([15,-7.5,15]),
    new Vertex([15,-15,15]),

    new Vertex([15,15,7.5]),
    new Vertex([15,7.5,7.5]),
    new Vertex([15,0,7.5]),
    new Vertex([15,-7.5,7.5]),
    new Vertex([15,-15,7.5]),

    new Vertex([15,15,0]),
    new Vertex([15,7.5,0]),
    new Vertex([15,0,0]),
    new Vertex([15,-7.5,0]),
    new Vertex([15,-15,0]),

    new Vertex([15,15,-7.5]),
    new Vertex([15,7.5,-7.5]),
    new Vertex([15,0,-7.5]),
    new Vertex([15,-7.5,-7.5]),
    new Vertex([15,-15,-7.5]),

    new Vertex([15,15,-15]),
    new Vertex([15,7.5,-15]),
    new Vertex([15,0,-15]),
    new Vertex([15,-7.5,-15]),
    new Vertex([15,-15,-15]),

  ]

  context2d.fillStyle = "green";
  context2d.fillRect(0, 0, canvas.width, canvas.height);

  for(let vertex of vertices){
    let cameraFrame = convertVertexToCameraFrame(vertex);
    console.log(cameraFrame);
    let projectedVertex = projectVertex(cameraFrame);
    console.log(projectedVertex);
    let screenCoordinates = getScreenCoordinate(projectedVertex, canvas.width, canvas.height);
    console.log(screenCoordinates);
    drawVertex2D(context2d, screenCoordinates);
  }

}

let logged = false;

function drawLoop(context2d, canvas, eventQueue){

  deltaTime = Date.now() - timeSinceLastFrame;

  //handleEvents(eventQueue, deltaTime);

  // eventQueue.queue = [];

  // camera.turnCamera(deltaTime);

  // camera.moveCamera(deltaTime);

  // context2d.fillStyle = "green";
  // context2d.fillRect(0, 0, canvas.width, canvas.height);



  // // for( let vertex of vertexStorage.vertices){
  // //   let cameraFrame = convertVertexToCameraFrame(vertex);
  // //   let projectedVertex = projectVertex(cameraFrame);
  // //   cameraFrame = null;
  // //   screenCoordinates = getScreenCoordinate(projectedVertex, canvas.width, canvas.height);
  // //   projectedVertex = null;
  // //   context2d.fillStyle = screenCoordinates.color;
  // //   context2d.fillRect(screenCoordinates.position[0] - 5, screenCoordinates.position[1] - 5, 10, 10);
  // // }
 

  // let cameraFrame = vertexStorage.vertices.map(vertex => convertVertexToCameraFrame(vertex));
  // let projectedVertex = cameraFrame.map(vertex => projectVertex(vertex));
  // let screenCoordinates = projectedVertex.map(vertex => getScreenCoordinate(vertex, canvas.width, canvas.height));

  // screenCoordinates.map(vertex2d => {context2d.fillStyle = vertex2d.color; context2d.fillRect(vertex2d[0] - 5, vertex2d[1] - 5, 10, 10);});

  // if(!logged) console.log(screenCoordinates);
  // logged = true;

  // timeSinceLastFrame = Date.now();

  // accumulatedFrames++;

}
