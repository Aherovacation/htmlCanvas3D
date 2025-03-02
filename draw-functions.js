function rgb(r, g, b){
  return `rgb(${r + ' ' + g + ' ' + b} )`
}

function drawTriangle(context, color, vertices){

  context.fillStyle = color;

  context.beginPath();
  context.moveTo(...vertices[0]);
  context.lineTo(...vertices[1]);
  context.lineTo(...vertices[2]);
  context.fill();

}

function drawVertex2D(context, vertex2D){

  let vxr = vertex2D.position[0] + vertex2D.size/2;
  let vxl = vertex2D.position[0] - vertex2D.size/2;

  let vyb = vertex2D.position[1] + vertex2D.size/2;
  let vyt = vertex2D.position[1] - vertex2D.size/2;

  let vertices = [
    [vxl, vyt],
    [vxr, vyt],
    [vxr, vyb],
    [vxl, vyb],
  ];

  context.fillStyle = vertex2D.color;

  context.beginPath();
  context.moveTo(...vertices[0]);
  context.lineTo(...vertices[1]);
  context.lineTo(...vertices[2]);
  context.lineTo(...vertices[3]);
  context.fill();

}