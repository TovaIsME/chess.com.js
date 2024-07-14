"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puzzle = void 0;
const chessApiClient_1 = __importDefault(require("./api/chessApiClient"));
class Puzzle {
    fetchDailyPuzzle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get('/puzzle');
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching daily puzzle");
            }
        });
    }
    fetchRandomDailyPuzzle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get('/puzzle/random');
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching random daily puzzle");
            }
        });
    }
}
exports.Puzzle = Puzzle;
