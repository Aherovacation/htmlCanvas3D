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