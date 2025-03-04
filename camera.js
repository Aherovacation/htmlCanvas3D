class Camera {
  constructor(aspectRatio) {

    this.worldPosition = new Vector3D();
    this.orientation = new Vector3D([1,0,0]);

    this.closeViewPlaneDistance = 10;
    this.farViewPlaneDistance = 20;

    this.viewPlaneWidth = 10;
    this.aspectRatio = aspectRatio;

    this.cameraSpeed = 0.01;
    this.cameraTurnSpeed = 0.001;

  }

  get x() {return this.worldPosition.x;}
  set x(value) {this.worldPosition.x = value;}

  get y() {return this.worldPosition.y;}
  set y(value) {this.worldPosition.y = value;}

  get z() {return this.worldPosition.z;}
  set z(value) {this.worldPosition.z = value;}

  get viewPlaneHeight() {return this.viewPlaneWidth / this.aspectRatio;};

  get widthViewAngle() {return Math.atan(this.viewPlaneWidth / this.closeViewPlaneDistance / 2);};

  get heightViewAngle() {return Math.atan(this.viewPlaneHeight / this.closeViewPlaneDistance / 2);};

  get tanWidthViewAngle() {return this.viewPlaneWidth / this.closeViewPlaneDistance / 2;};

  get angleFromX() {

    let result = Math.acos(this.orientation.x);
  
    if(this.orientation.y > 0) {
      return result;
    }

    return 2*Math.PI - result;

    
  };

  moveCamera(deltaTime, localMoveDirection) {

    let distance = deltaTime * this.cameraSpeed;

    let angle = this.angleFromX;

    let cosResult = Math.cos(angle);
    let sinResult = Math.sin(angle);

    let worldMoveDirectionX = localMoveDirection.x * cosResult - localMoveDirection.y * sinResult;
    let worldMoveDirectionY = localMoveDirection.y * cosResult + localMoveDirection.x * sinResult;
    
    this.x += worldMoveDirectionX * distance;
    this.y += worldMoveDirectionY * distance;

  }

  turnCamera(deltaTime, turnDirection) {

    let turnAngle = this.cameraTurnSpeed * deltaTime * turnDirection;

    let cosResult = Math.cos(turnAngle);
    let sinResult = Math.sin(turnAngle);

    let currx = this.orientation.x;
    let curry = this.orientation.y;

    this.orientation.x = currx * cosResult - curry * sinResult;
    this.orientation.y = currx * sinResult + curry * cosResult;

    this.orientation.normalize();

  }

  update(deltaTime, eventStates) {

    let localMoveDirection = new Vector2D([0,0]);

    if(eventStates[0]) localMoveDirection.x += 1;
    if(eventStates[1]) localMoveDirection.x += -1;
    if(eventStates[2]) localMoveDirection.y += 1;
    if(eventStates[3]) localMoveDirection.y += -1;

    if(localMoveDirection.x != 0 && localMoveDirection.y != 0){
      localMoveDirection.x /= Math.sqrt(2);
      localMoveDirection.y /= Math.sqrt(2);
    }

    this.moveCamera(deltaTime, localMoveDirection);

    let turnDirection = 0;

    if(eventStates[4]) turnDirection += 1;
    if(eventStates[5]) turnDirection += -1;

    this.turnCamera(deltaTime, turnDirection);

  }

}