import express from 'express';
import HttpStatus from 'http-status-codes';
const router = express.Router();
import busesRoute from './bus.route.js';

const routes = () => {
	router.get('/', (req,res) => {
		res.json('Welcome');
	});
    router.use('/buses', busesRoute);
	return router;
}

export default routes;