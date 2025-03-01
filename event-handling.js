let isLocked = false;

let eventQueue = {
  locked: false,
  queue: [],
}

function setupEvents(canvas){
  window.addEventListener('keydown', (event) => {
    if(!event.repeat && !eventQueue.locked){eventQueue.queue.push(event);}
  });
  window.addEventListener('keyup', (event) => {
    if(!event.repeat && !eventQueue.locked){eventQueue.queue.push(event);}
  });
  window.addEventListener('mousemove', event => {
    if(!event.repeat && !eventQueue.locked){eventQueue.queue.push(event);}
  })
  canvas.addEventListener('click', async () =>{
    await canvas.requestPointerLock();
  })
}

function handleEvents(eventQueue, canvas){

  //eventQueue.locked = true;

  for(let event of eventQueue.queue){

    switch(event.type){
      case 'keydown':
        
        switch(event.code){
          case 'KeyW':
            camera.movementVector[0] = 1;
            break;
          case 'KeyS':
            camera.movementVector[1] = 1;
            break;
          case 'KeyA':
            camera.movementVector[2] = 1;
            break;
          case 'KeyD':
            camera.movementVector[3] = 1;
            break;
          case 'KeyQ':
            camera.cameraOmega[0] = 1;
            break;
          case 'KeyE':
            camera.cameraOmega[1] = 1;
            break;
          case 'Escape':
            break;
          default:
            break;
        }

        break;
      case 'keyup':

        switch(event.code){
          case 'KeyW':
            camera.movementVector[0] = 0;
            break;
          case 'KeyS':
            camera.movementVector[1] = 0;
            break;
          case 'KeyA':
            camera.movementVector[2] = 0;
            break;
          case 'KeyD':
            camera.movementVector[3] = 0;
            break;
          case 'KeyQ':
            camera.cameraOmega[0] = 0;
            break;
          case 'KeyE':
            camera.cameraOmega[1] = 0;
            break;
          default:
            break;
        }

        break;
      case 'mousemove':
        //console.log(event.movementX);
        break;
      default:
        break;
    }


  }

  //eventQueue.locked = false;

}