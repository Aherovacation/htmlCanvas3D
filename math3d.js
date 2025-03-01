class Camera {
  constructor() {

    this.position = [0,0,0];

    this.angleFromX = 0;

    this.cameraSpeed = 0.01;
    this.cameraTurnSpeed = 0.1;

    this.cameraOmega = [0,0];
    this.movementVector = [0, 0, 0, 0];
    //this.rotationVector = [0,0,0]; I will be only considering rotations around the z-axis for now
    this.zRotation = 0;

    this.viewPlaneDistance = 10;
    this.viewPlaneCutoffDistance = 20;
    this.viewPlaneWidth = 10;
    this.viewPlaneHeight = 10;

    this.coneAngle = Math.tan(this.viewPlaneWidth / this.viewPlaneDistance / 2) * 180 / Math.PI;

    this.translate = (dx, dy, dz) => { this.position[0] += dx;  this.position[1] += dy; this.position[2] += dz;};

    this.moveCamera = (deltaTime) => {

      let moveVector = [this.movementVector[0] - this.movementVector[1], this.movementVector[2] - this.movementVector[3], 0];

      let moveVectorLength = Math.sqrt(moveVector[0] * moveVector[0] + moveVector[1] * moveVector[1] + moveVector[2] * moveVector[2]);

      if(moveVectorLength > 0){

        let distance = deltaTime * this.cameraSpeed;

        let angle = camera.angleFromX * Math.PI / 180;

        let cosResult = Math.cos(angle);
        let sinResult = Math.sin(angle);

        let xResult = distance * moveVector[0] / moveVectorLength;
        let yResult = distance * moveVector[1] / moveVectorLength;

        this.position[0] += xResult * cosResult - yResult * sinResult;
        this.position[1] += yResult * cosResult + xResult * sinResult
        this.position[2] += distance * moveVector[2] / moveVectorLength;
      }

    }

    this.turnCamera = (deltaTime) => {

      this.angleFromX += (this.cameraOmega[0] - this.cameraOmega[1]) * this.cameraTurnSpeed * deltaTime;

    }

    this.moveForward = (deltaTime) => { 

      let angle = camera.angleFromX * Math.PI / 180;

      let cosResult = Math.cos(angle);
      let sinResult = Math.sin(angle);

      let distance = deltaTime * this.cameraSpeed;

      this.position[0] += (distance*cosResult);
      this.position[1] += (distance*sinResult);

    };
 
  }
}

let camera = new Camera();

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

function convertToCameraFrame(vertex) {

  let result = [];

  let x = vertex[0] - camera.position[0];
  let y = vertex[1] - camera.position[1];
  let z = vertex[2] - camera.position[2];

  let angle = camera.angleFromX * Math.PI / 180;

  let cosResult = Math.cos(angle);
  let sinResult = Math.sin(angle);
  
  result.push((x*cosResult + y*sinResult));
  result.push((y*cosResult - x*sinResult));
  result.push(z);

  return result;

}

function projectVertex(vertex) {

  let result = [camera.viewPlaneDistance * (vertex[1] / vertex[0]), camera.viewPlaneDistance * (vertex[2] / vertex[0])];

  return result;

}

function getScreenCoordinate(screenWidth, screenHeight, y, z) {

  let result = [screenWidth * (1/2 - y/camera.viewPlaneWidth), screenHeight * (1/2 - z/camera.viewPlaneHeight)];

  return result;

}