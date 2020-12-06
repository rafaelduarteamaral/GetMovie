"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMovie_1 = __importDefault(require("../utils/getMovie"));
const getTranslations_1 = __importDefault(require("../utils/getTranslations"));
const MovieModel_1 = __importDefault(require("../database/model/MovieModel"));
class GetMoviService {
    async execute(req, res) {
        try {
            const movie = await JSON.parse(await getMovie_1.default(req.params.id));
            const translation = await JSON.parse(await getTranslations_1.default(req.params.id));
            return res.status(200).json({ movie, translation });
            const movieModel = new MovieModel_1.default({ movie, translation });
            await movieModel
                .save()
                .then((response) => {
                return res.status(200).json(response);
            })
                .catch((error) => {
                return res.status(500).json(error);
            });
            return res.status(200).json({ movie, translation });
        }
        catch (err) {
            return res.status(400).json({
                error: 'unexpected error while creating Article'
            });
        }
    }
    async update(req, res) {
        await MovieModel_1.default.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then((response) => {
            return res.status(200).json(response);
        })
            .catch((error) => {
            return res.status(500).json(error);
        });
        return 0;
    }
}
exports.default = GetMoviService;
