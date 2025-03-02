class Camera {
  constructor() {

    this.position = [0,0,0];

    this.orientation = [1,0,0];

    this.viewPlaneDistances = [10, 20];

    this.viewAngles = [Math.PI/4, Math.PI/4];

    this.cameraSpeed = 0.01;
    this.cameraTurnSpeed = 0.1;

    this.getViewPlaneWidth = () => {return 2 * this.viewPlaneDistances[0] * Math.tan(this.viewAngles[0]);};

    this.getViewPlaneHeight = () => {return 2 * this.viewPlaneDistances[0] * Math.tan(this.viewAngles[1]);};

    this.moveCamera = (deltaTime, moveDirection) => {

      let distance = deltaTime * this.cameraSpeed;

      this.position[0] += moveDirection[0] * distance;
      this.position[1] += moveDirection[1] * distance;

    }

    this.turnCamera = (deltaTime, turnDirection) => {

      let turnAngle = this.cameraTurnSpeed * deltaTime * turnDirection;

      let cosResult = Math.cos(turnAngle);
      let sinResult = Math.sin(turnAngle);

      let currx = this.orientation[0];
      let curry = this.orientation[1];

      this.orientation[0] = currx * cosResult - curry * sinResult;
      this.orientation[1] = currx * sinResult + curry * cosResult;

      let length = Math.sqrt(this.orientation[0] * this.orientation[0] + this.orientation[1] * this.orientation[1]);

      this.orientation[0] /= length;
      this.orientation[1] /= length;

    }
 
  }
}

let camera = new Camera();