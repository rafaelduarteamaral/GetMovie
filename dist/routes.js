"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Classes Routes
const Movie_1 = __importDefault(require("./services/Movie"));
const routes = express_1.default.Router();
const getMoviService = new Movie_1.default;
/**
 * Movie
 */
routes.get('/movie/:id', getMoviService.execute);
exports.default = routes;
