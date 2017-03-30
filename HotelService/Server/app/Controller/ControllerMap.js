/**
 * Created by User on 9/9/2016.
 * developer: -Kasun
 * use as map for all the controllers allocating
 */
var Controllers = {};

Controllers.HotelController = require('./ModuleControllers/HotelController');
Controllers.RoomsController = require('./ModuleControllers/RoomsController');
Controllers.FacilityController = require('./ModuleControllers/FacilityController');

module.exports = Controllers;
