class Vector {

  static checkValid(v1, v2) {
    return v1 instanceof Vector && v2 instanceof Vector && v1.elements.length == v2.elements.length;
  }

  static add(v1, v2){
    if(Vector.checkValid(v1, v2)){
      let result = new Vector([]);

      for(let i = 0; i < v1.elements.length; i++){
        result.elements.push(v1.elements[i] + v2.elements[i]);
      }

      return result;
    }
  }

  constructor(elements){

    this.elements = []

    if(Array.isArray(elements)){

      for(let i = 0; i < elements.length; i++){
        this.elements.push(elements[i]);
      }

    }

    this.add = vector => {

      if(Vector.checkValid(this, vector)){

        for(let i = 0; i < this.elements.length; i++){
          this.elements[i] += vector.elements[i];
        }

        return this;

      }

    }

  }
}