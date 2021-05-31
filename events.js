'use strict';
// singleton 
const Events = require('events');

const events = new Events();// create one instance 
module.exports = events;
