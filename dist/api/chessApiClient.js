"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chessApiClient = axios_1.default.create({
    baseURL: 'https://api.chess.com/pub',
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.default = chessApiClient;
