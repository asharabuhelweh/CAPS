'use strict';

const event = require('./events.js');


// require Modules  
require('./Modules/driver.js');
require('./Modules/vendor.js');

event.on('pickup', pickupHandler)
event.on('in-transit', transitHandler)

event.on('delivered', deliveredHandler)



function pickupHandler(payload) {
  console.log({ event: 'pickup', time: new Date(), payload:payload.payload })

}

function transitHandler(payload) {
  console.log({ event: 'in-transit', time: new Date(), payload:payload.payload })

}

function deliveredHandler(payload) {
  console.log({ event: 'delivered', time: new Date(), payload:payload.payload })

}

module.exports={
  pickupHandler:pickupHandler,
  transitHandler:transitHandler,
  deliveredHandler:deliveredHandler
}