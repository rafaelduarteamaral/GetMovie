import express, {  Request, Response, NextFunction } from 'express';

// Classes Routes
import GetMoviService from "./services/Movie";

const routes = express.Router();

const getMoviService = new GetMoviService;

/**
 * Movie
 */
routes.get('/movie/:id', getMoviService.execute);

export default routes;