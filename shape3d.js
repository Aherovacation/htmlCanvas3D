// // A line is an array of two vertices i.e. [v1,v2] or [[x1,y1,z1],[x2,y2,z2]] (truely the data is [[index to v1],[index to v2]])
// class LineStorage {
//   constructor() {
    
//     this.elements = [];

//     this.addLines = vertexIndices => {
//       let indices = [];
//       for(let i = 0; i < vertexIndices.length; i++){
//         indices.push(this.elements.length);
//         this.elements.push([vertexIndices[i], vertexIndices[(i + 1) % vertexIndices.length]]);
//       }
//       return indices;
//     }
//   }
// }

// let lineStorage = new LineStorage();

// // Shapes are any number of lines and vertices
// class ShapeStorage {
//   constructor() {
//     this.elements = [];
//   }
// }

// let shapeStorage = new ShapeStorage();

// class Object3D {
//   constructor() {
//     this.position = [0, 0, 0];
//     this.rotation = [
//       [0,0,0],
//       [0,0,0],
//       [0,0,0],
//     ];

//     this.translateX = x => this.position[0] + x;
//     this.translateY = y => this.position[1] + y;
//     this.translateZ = z => this.position[2] + z;

//     this.translate = (x,y,z) => {this.translateX(x); this.translateY(y); this.translateZ(z);}

//     // this.rotateX = x => {}
//     // this.rotateY = y => {}
//     // this.rotateZ = z => {}

//     this.shapeIndex = shapeStorage.elements.length;
//     shapeStorage.elements.push(this);

//   }
// }

// class Triangle extends Object3D {

//   constructor(v1 = [10,0,0], v2 = [12,2,0], v3 = [10,0,2]){

//     super();

//     this.vertexIndex = vertexStorage.addVertices([v1,v2,v3]);
//     this.lineIndices = lineStorage.addLines(this.vertexIndices);

//     this.getVertex = index => {return vertexStorage.elements[this.vertexIndices[index]]};
    
//     this.getNormal = () => {

//       let v0 = multiplyConstant(-1, this.getVertex(0));

//       return normalize(crossProduct(addResult(this.getVertex(1), v0), addResult(this.getVertex(2), v0)));

//     };

//   }
// }