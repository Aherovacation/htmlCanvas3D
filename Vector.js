class VectorCore {

  constructor(dimensions){

    this.dimensions = dimensions;

    this.elements = [];

    for(let i = 0; i < this.dimensions; i++){
      this.elements.push(0);
    }

  }

  multiplyConstant(c){

    for(let i = 0; i < this.dimensions; i++){
      this.elements[i] *= c;
    }

  }

  addConstant(c){

    for(let i = 0; i < this.dimensions; i++){
      this.elements[i] += c;
    }

  }

  add(vector) {

    for(let i = 0; i < this.dimensions; i++){
      this.elements[i] += vector.elements[i];
    }

  }

  dot(vector){

    let localElements = this.elements;
    let vectorElements = vector.elements;

    let result = 0;

    for(let i = 0; i < this.dimensions; i++){
      result += localElements[i] * vectorElements[i];
    }

    return result;
  }

  normalize(){

    let length = 0;

    for(let i = 0; i < this.dimensions; i++){
      length += this.elements[i] * this.elements[i];
    }

    if(length > 0) { this.multiplyConstant( 1 / Math.sqrt(length) ); }
   
  }

}

class Vector3D extends VectorCore {

  constructor(position){

    super(3);

    if(!position){
      return;
    }

    for(let i = 0; i < 3; i++){
      this.elements[i] = position[i];
    }

  }

  get x() {return this.elements[0];}
  set x(value) {this.elements[0] = value;}

  get y() {return this.elements[1];}
  set y(value) {this.elements[1] = value;}

  get z() {return this.elements[2];}
  set z(value) {this.elements[2] = value;}

  cross(vector){

    return new Vector3D([
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x,
    ]);
    
  }

}

class Vector2D extends VectorCore {

  constructor(position){

    super(2);

    if(!position){
      return;
    }

    for(let i = 0; i < 2; i++){
      this.elements[i] = position[i];
    }

  }

  get x() {return this.elements[0];}
  set x(value) {this.elements[0] = value;}

  get y() {return this.elements[1];}
  set y(value) {this.elements[1] = value;}

  cross(vector){

    return new Vector3D([
      0,
      0,
      this.x * vector.y - this.y * vector.x,
    ]);
    
  }

}