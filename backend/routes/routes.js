const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const serviceController = require('../controllers/controllerStores');
const controllerCabinet = require('../controllers/controllerCabinet');
const bookingController = require('../controllers/controllerBooking');

router.get('/events', eventController.getEvents);
router.post('/register', eventController.registerEvent);
router.get('/services', serviceController.getServices);
router.get('/user/:userId', controllerCabinet.getUser);
router.get('/user/:userId/bookings', controllerCabinet.getBookings);
router.get('/user/:userId/events', controllerCabinet.getEvents);
router.put('/user/:userId', controllerCabinet.updateUser);
router.post('/bookings', bookingController.createBooking);

module.exports = router;
