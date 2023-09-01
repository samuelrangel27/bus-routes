import express from 'express';
import HttpStatus from 'http-status-codes';
const router = express.Router();
import busesRoute from './bus.routes.js';
import stationRoute from './station.routes.js'
import routesRoute from './route.routes.js';
import tripsRoute from './trip.routes.js';

const routes = () => {
	router.get('/', (req,res) => {
		res.json('Welcome');
	});
    router.use('/buses', busesRoute);
	router.use('/stations', stationRoute);
	router.use('/routes', routesRoute);
	router.use('/trips', tripsRoute);
	return router;
}

export default routes;