"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = __importDefault(require("./config/mongo"));
const mongoUserPass = mongo_1.default.username
    ? `${mongo_1.default.username}:${mongo_1.default.password}@`
    : '';
mongoose_1.default.connect(`mongodb://${mongoUserPass}${mongo_1.default.host}:${mongo_1.default.port}/${mongo_1.default.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
exports.default = mongoose_1.default;
