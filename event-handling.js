function setupEvents(context2d, canvas, eventQueue){

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

function handleEvents(eventQueue, deltaTime){

  for(let event of eventQueue.queue){

    switch(event.type){
      case 'keydown':
        
        switch(event.code){
          case 'KeyW':
            eventQueue.state[0] = true;
            break;
          case 'KeyS':
            eventQueue.state[1] = true;
            break;
          case 'KeyA':
            eventQueue.state[2] = true;
            break;
          case 'KeyD':
            eventQueue.state[3] = true;
            break;
          case 'KeyQ':
            eventQueue.state[4] = true;
            break;
          case 'KeyE':
            eventQueue.state[5] = true;
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
            eventQueue.state[0] = false;
            break;
          case 'KeyS':
            eventQueue.state[1] = false;
            break;
          case 'KeyA':
            eventQueue.state[2] = false;
            break;
          case 'KeyD':
            eventQueue.state[3] = false;
            break;
          case 'KeyQ':
            eventQueue.state[4] = false;
            break;
          case 'KeyE':
            eventQueue.state[5] = false;
            break;
          default:
            break;
        }

        break;
      case 'mousemove':
        break;
      default:
        break;
    }


  }

}