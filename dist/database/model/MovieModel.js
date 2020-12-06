"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const Schema = connection_1.default.Schema;
const MovieSchema = new Schema({
    adult: { type: Boolean, required: true },
    backdrop_path: { type: String, required: true },
    belongs_to_collection: { type: String, required: true },
    budget: { type: Number, required: true },
    genres: [
        {
            id: { type: Number, required: true },
            name: { type: String, required: true }
        },
        {
            id: { type: Number, required: true },
            name: { type: String, required: true }
        }
    ],
    homepage: { type: String, required: true },
    id: { type: Number, required: true },
    imdb_id: { type: String, required: true },
    original_language: { type: String, required: true },
    original_title: { type: String, required: true },
    overview: { type: String, required: true },
    popularity: { type: Number, required: true },
    poster_path: { type: String, required: true },
    production_companies: [
        {
            id: { type: Number, required: true },
            logo_path: { type: String, required: true },
            name: { type: String, required: true },
            origin_country: { type: String, required: true }
        },
        {
            id: { type: Number, required: true },
            logo_path: { type: String, required: true },
            name: { type: String, required: true },
            origin_country: { type: String, required: true }
        }
    ],
    production_countries: [
        {
            iso_3166_1: { type: String, required: true },
            name: { type: String, required: true }
        }
    ],
    release_date: { type: String, required: true },
    revenue: { type: String, required: true },
    runtime: { type: Number, required: true },
    spoken_languages: [
        {
            english_name: { type: String, required: true },
            iso_639_1: { type: String, required: true },
            name: { type: String, required: true }
        }
    ],
    status: { type: String, required: true },
    tagline: { type: String, required: true },
    title: { type: String, required: true },
    video: { type: Boolean, required: true },
    vote_average: { type: Number, required: true },
    vote_count: { type: Number, required: true },
    translation: { type: String, required: true }
});
exports.default = connection_1.default.model('Movie', MovieSchema);