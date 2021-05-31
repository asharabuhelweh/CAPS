'use strict';
const event=require('../events.js');

setTimeout(() =>
{
  event.on('pickup' , (payload) =>
  {
    console.log(`DRIVER: picked up ${payload.payload.orderID}`)
    event.emit('in-transit', payload);
  })
}, 1000)

setTimeout(() =>
{
    event.on('pickup' , (payload) =>
    {
        console.log(`delivered up ${payload.payload.orderID}`)
        event.emit('delivered', payload);
        console.log(`Thank you for delivering ${payload.payload.orderID} `)
    })
}, 3000)
