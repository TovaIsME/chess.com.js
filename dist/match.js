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
exports.Match = void 0;
const chessApiClient_1 = __importDefault(require("./api/chessApiClient"));
class Match {
    constructor(MatchID) {
        this.MatchID = MatchID;
    }
    fetchMatchDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/match/${this.MatchID}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching match details");
            }
        });
    }
    fetchMatchBoardDetails(board) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/match/${this.MatchID}/${board}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching match board details");
            }
        });
    }
    fetchLiveMatchDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/match/live/${this.MatchID}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching live match details");
            }
        });
    }
    fetchLiveMatchBoardDetails(board) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/match/live/${this.MatchID}/${board}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching live match board details");
            }
        });
    }
}
exports.Match = Match;
