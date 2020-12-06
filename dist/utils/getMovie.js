"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getMovie = async (id) => {
    var config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=b45df506469a79f0765ef4be6522ec07&language=en-US\n`,
        headers: {}
    };
    const movie = axios_1.default(config)
        .then(function (response) {
        return JSON.stringify(response.data);
    })
        .catch(function (error) {
        return error;
    });
    return movie;
};
exports.default = getMovie;
