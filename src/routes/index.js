import express from 'express';
import HttpStatus from 'http-status-codes';
const router = express.Router();
import busesRoute from './bus.routes.js';
import stationRoute from './station.routes.js'

const routes = () => {
	router.get('/', (req,res) => {
		res.json('Welcome');
	});
    router.use('/buses', busesRoute);
	router.use('/stations', stationRoute);
	return router;
}

export default routes;