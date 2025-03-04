document.addEventListener("DOMContentLoaded", () => {

  document.body.style.padding = '0px';
  document.body.style.margin = '0px';

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

  let camera = new Camera(canvas.width / canvas.height);

  eventStates = [false, false, false, false, false, false];
  setupEvents(context2d, canvas, camera, eventStates);

  let x = (camera.closeViewPlaneDistance + camera.farViewPlaneDistance) / 2;

  let y = x * camera.tanWidthViewAngle;

  vertices = [

    new Vertex3D([x,y,0]),
    new Vertex3D([x,y/2,0]),
    new Vertex3D([x,0,0]),
    new Vertex3D([x,y/-2,0]),
    new Vertex3D([x,-y,0]),

  ]

  timeSinceLastFrame = Date.now();

  setInterval(drawLoop, 0, context2d, canvas, vertices, camera, eventStates);

}

function drawLoop(context2d, canvas, vertices, camera, eventStates){

  deltaTime = Date.now() - timeSinceLastFrame;

  handleEvents(eventStates, deltaTime);

  camera.update(deltaTime, eventStates);

  context2d.fillStyle = "green";
  context2d.fillRect(0, 0, canvas.width, canvas.height);

  for(let vertex of vertices){
    let cameraFrame = convertVertexToCameraFrame(vertex, camera);
    let projectedVertex = projectVertex(cameraFrame, camera);
    let screenCoordinates = getScreenCoordinate(projectedVertex, canvas.width, canvas.height, camera);
    drawVertex2D(context2d, screenCoordinates);
  }

  timeSinceLastFrame = Date.now();

  // Debugging code //

  // let base = new Vector2D([canvas.width/2, canvas.height/2]);

  // drawLine(context2d, "blue", [base, new Vector2D([base.x, base.y - 100])]);

  // drawLine(context2d, "red", [base, new Vector2D([base.x - 100, base.y])]);

  // drawLine(context2d, "black", [base, new Vector2D([base.x - 100*camera.orientation.y, base.y - 100*camera.orientation.x])]);

  // base.add(new Vector2D([100, 0]));

  // drawLine(context2d, "black", [base, new Vector2D([base.x, base.y - 100*camera.orientation.x])]);

  // base.add(new Vector2D([-100, 100]));

  // drawLine(context2d, "black", [base, new Vector2D([base.x - 100*camera.orientation.y, base.y])]);

  // base.add(new Vector2D([-200, -100]));

  // context2d.fillStyle = 'blue';

  // context2d.beginPath();
  // context2d.moveTo(base.x, base.y);
  // context2d.lineTo(base.x + 50, base.y);
  // context2d.lineTo(base.x + 50, base.y - 100*Math.acos(camera.orientation.x));
  // context2d.lineTo(base.x, base.y - 100*Math.acos(camera.orientation.x));
  // context2d.fill();

  // base.add(new Vector2D([-100, 0]));

  // context2d.fillStyle = 'red';

  // context2d.beginPath();
  // context2d.moveTo(base.x, base.y);
  // context2d.lineTo(base.x + 50, base.y);
  // context2d.lineTo(base.x + 50, base.y - 100*Math.acos(camera.orientation.y));
  // context2d.lineTo(base.x, base.y - 100*Math.acos(camera.orientation.y));
  // context2d.fill();

  // base.add(new Vector2D([0, 100]));

  // context2d.fillStyle = Math.acos(camera.orientation.y) > Math.PI/2 ? 'black' : 'red';

  // context2d.beginPath();
  // context2d.moveTo(base.x, base.y);
  // context2d.lineTo(base.x + 50, base.y);
  // context2d.lineTo(base.x + 50, base.y +50 );
  // context2d.lineTo(base.x, base.y + 50);
  // context2d.fill();

  // base.add(new Vector2D([100, 0]));

  // context2d.fillStyle = Math.acos(camera.orientation.x) > Math.PI/2 ? 'black' : 'red';

  // context2d.beginPath();
  // context2d.moveTo(base.x, base.y);
  // context2d.lineTo(base.x + 50, base.y);
  // context2d.lineTo(base.x + 50, base.y +50 );
  // context2d.lineTo(base.x, base.y + 50);
  // context2d.fill();

  accumulatedFrames++;

}
