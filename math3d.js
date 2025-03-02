function multiplyConstant(c, v){
  return [c * v[0], c * v[1], c * v[2]];
}

function addResult(v1, v2){
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]]; 
}

function dotProduct(v1, v2){
  return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] + v2[2];
}
 
function crossProduct(v1, v2){
  return [v1[1] * v2[2] - v1[2] * v2[1], v1[2] * v2[0] - v1[0] * v2[2], v1[0] * v2[1] - v1[1] * v2[0]];
}

function normalize(v){

  let length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

  if(length > 0) return multiplyConstant(1 / length, v);

  return [0, 0, 0];
  
}

function cullVertices() {

  let angle = camera.angleFromX * Math.PI / 180;

  let newVector = [Math.cos(angle), Math.sin(angle), 0];

  let validVertices = [];

  for(let i = 0; i < vertexStorage.elements.length; i += 3){
    if(dotProduct(vertexStorage.elements[i + 0], newVector) * Math.PI / 180 < camera.coneAngle && 
      dotProduct(vertexStorage.elements[i + 1], newVector) * Math.PI / 180 < camera.coneAngle &&
      dotProduct(vertexStorage.elements[i + 2], newVector) * Math.PI / 180 < camera.coneAngle){
        validVertices.push(vertexStorage.elements[i + 0]);
        validVertices.push(vertexStorage.elements[i + 1]);
        validVertices.push(vertexStorage.elements[i + 2]);
    }
  }

  return validVertices;
}

let printed = 0;

function convertVertexToCameraFrame(vertex) {

  let x = vertex.position[0] - camera.position[0];
  let y = vertex.position[1] - camera.position[1];
  let z = vertex.position[2] - camera.position[2];

  let angle = Math.acos(camera.orientation[0]);

  let cosResult = Math.cos(angle);
  let sinResult = Math.sin(angle);

  let color = vertex.color;

  return new Vertex([(x*cosResult + y*sinResult), (y*cosResult - x*sinResult), z],color);

}



function projectVertex(vertex) {

  return new Vertex2D([camera.viewPlaneDistances[0] * (vertex.position[1] / vertex.position[0]), camera.viewPlaneDistances[0] * (vertex.position[2] / vertex.position[0])], vertex.color);

}

function getScreenCoordinate(vertex, canvasWidth, canvasHeight) {

  let xCoordinate = canvasWidth * ( 0.5 - vertex.position[0] / camera.getViewPlaneWidth());
  let yCoordinate = canvasHeight * ( 0.5 - vertex.position[1] / camera.getViewPlaneHeight());

  return new Vertex2D([xCoordinate, yCoordinate], vertex.color);

}