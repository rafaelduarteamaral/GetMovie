"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const tsyringe_1 = require("tsyringe");
tsyringe_1.container.register('LoggerProvider', {
    useValue: {
        log: jest.fn(),
    },
});
