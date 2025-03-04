'use strict';

class VertexCore {

  constructor(color, size) {

    this.color = color;

    this.size = size;

  }

}

class Vertex3D extends VertexCore {

  constructor(position = [0,0,0], color = rgb(0, 0, 0), size = 10) {

    super(color, size);
    this.worldPosition = new Vector3D(position);

  }

  get x() {return this.worldPosition.x;}
  set x(value) {this.worldPosition.x = value;}

  get y() {return this.worldPosition.y;}
  set y(value) {this.worldPosition.y = value;}

  get z() {return this.worldPosition.z;}
  set z(value) {this.worldPosition.z = value;}

}

class Vertex2D extends VertexCore {

  constructor(position = [0,0], color = rgb(0, 0, 0), size = 10) {

    super(color, size);

    this.worldPosition = new Vector2D(position);

  }

  get x() {return this.worldPosition.x;}
  set x(value) {this.worldPosition.x = value;}

  get y() {return this.worldPosition.y;}
  set y(value) {this.worldPosition.y = value;}

}

class VertexStorage {

  constructor() {
    
    this.vertices = [];

    this.screenVerticesCache = [];

  }

}

let vertexStorage = new VertexStorage();