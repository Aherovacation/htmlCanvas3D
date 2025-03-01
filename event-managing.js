class EventManager {
  constructor(){

    // TODO: Make it so that each event key correlatex to an array of different callback functions
    this.eventObject = {};

    this.addEvent = function(event, callback){

      if(!this.eventObject[event]) {

        //console.log(`Adding event \n ${event}\nwith callback\n ${callback}`);

        this.eventObject[event] = callback;

        document.addEventListener(event, callback);

      }

    }
    this.removeEvent = function(event, callback){

      if(this.eventObject[event]) {

        //console.log(`Removing event \n ${event}\nwith callback \n ${callback}`);

        delete this.eventObject[event];

        document.removeEventListener(event, callback);

      }

    }
  }
}