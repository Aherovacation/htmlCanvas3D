function convertVertexToCameraFrame(vertex, camera) {

  let x = vertex.x - camera.x;
  let y = vertex.y - camera.y;
  let z = vertex.z - camera.z;

  let angle = camera.angleFromX;

  let cosResult = Math.cos(angle);
  let sinResult = Math.sin(angle);

  let color = vertex.color;

  return new Vertex3D([(x*cosResult + y*sinResult), (y*cosResult - x*sinResult), z],color);

}

function projectVertex(vertex, camera) {

  return new Vertex2D([camera.closeViewPlaneDistance * (vertex.y / vertex.x), camera.closeViewPlaneDistance * (vertex.z / vertex.x)], vertex.color);

}

function getScreenCoordinate(vertex, canvasWidth, canvasHeight, camera) {

  let xCoordinate = canvasWidth * ( 0.5 - vertex.x / camera.viewPlaneWidth);
  let yCoordinate = canvasHeight * ( 0.5 - vertex.y / camera.viewPlaneHeight);

  return new Vertex2D([xCoordinate, yCoordinate], vertex.color);

}