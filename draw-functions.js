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

  let vxr = vertex2D.x + vertex2D.size/2;
  let vxl = vertex2D.x - vertex2D.size/2;

  let vyb = vertex2D.y + vertex2D.size/2;
  let vyt = vertex2D.y - vertex2D.size/2;

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

function drawLine(context, color, vertices){

  context.strokeStyle = color;

  v1 = vertices[0];
  v2 = vertices[1];

  context.beginPath();
  context.moveTo(v1.x, v1.y);
  context.lineTo(v2.x, v2.y);
  context.stroke();

}