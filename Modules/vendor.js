'use strict';
require('dotenv').config();
const faker=require('faker');
const store = process.env.STORE_NAME;
const event=require('../events.js')




setInterval(() => {
  
  let order={
    store:`${store}`,
    orderID:`${faker.datatype.uuid()}`,
    customer:`${faker.name.findName()}`,
    address:`${faker.address.cityName()},${faker.address.citySuffix()}`
  }
  event.emit('pickup', {payload:order});
}, 5000);

setTimeout(() => {
  event.on('In-transit', (data) => {
    console.log('In-transit', data);
  
  });
}, 2000);

event.on('delivered' , (payload) =>{
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
})