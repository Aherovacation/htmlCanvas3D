function setupEvents(context2d, canvas, camera, eventStates){

  window.addEventListener('resize', () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context2d.fillStyle = "green";
    context2d.fillRect(0, 0, canvas.width, canvas.height);

    camera.aspectRatio = canvas.width / canvas.height;

  });

  window.addEventListener('keydown', (event) => {

    switch(event.code){
      case 'KeyW':
        if(!eventStates[0]) {eventStates[0] = true;};
        break;
      case 'KeyS':
        if(!eventStates[1]) {eventStates[1] = true;};
        break;
      case 'KeyA':
        if(!eventStates[2]) {eventStates[2] = true;};
        break;
      case 'KeyD':
        if(!eventStates[3]) {eventStates[3] = true;};
        break;
      case 'KeyQ':
        if(!eventStates[4]) {eventStates[4] = true;};
        break;
      case 'KeyE':
        if(!eventStates[5]) {eventStates[5] = true;};
        break;
      case 'Escape':
        break;
      default:
        break;
    }

  });
  window.addEventListener('keyup', (event) => {

    switch(event.code){
      case 'KeyW':
        if(eventStates[0]) {eventStates[0] = false;};
        break;
      case 'KeyS':
        if(eventStates[1]) {eventStates[1] = false;};
        break;
      case 'KeyA':
        if(eventStates[2]) {eventStates[2] = false;};
        break;
      case 'KeyD':
        if(eventStates[3]) {eventStates[3] = false;};
        break;
      case 'KeyQ':
        if(eventStates[4]) {eventStates[4] = false;};
        break;
      case 'KeyE':
        if(eventStates[5]) {eventStates[5] = false;};
        break;
      default:
        break;
    }

  });

  return eventStates;
}

function handleEvents(eventStates, deltaTime){



}