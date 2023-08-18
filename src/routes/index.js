import express from 'express';
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