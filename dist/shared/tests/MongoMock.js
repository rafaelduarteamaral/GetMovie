"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class MongoMock {
    async connect() {
        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB server not initialized');
        }
        this.database = await mongoose_1.default.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    }
    disconnect() {
        return this.database.connection.close();
    }
}
exports.default = new MongoMock();
