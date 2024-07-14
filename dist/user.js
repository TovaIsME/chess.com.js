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
exports.User = void 0;
const chessApiClient_1 = __importDefault(require("./api/chessApiClient"));
class User {
    constructor(username) {
        this.username = username;
    }
    fetchUserDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user details: ${error.message}`);
                throw new Error('Failed to fetch user details');
            }
        });
    }
    fetchUserStats() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/stats`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user stats: ${error.message}`);
                throw new Error('Failed to fetch user stats');
            }
        });
    }
    isUserOnline() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}`);
                return response.data.status === "online";
            }
            catch (error) {
                console.error(`Failed to check if user is online: ${error.message}`);
                throw new Error('Failed to check if user is online');
            }
        });
    }
    fetchUserGames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/games`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user games: ${error.message}`);
                throw new Error('Failed to fetch user games');
            }
        });
    }
    fetchUserToMoveGames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/games/to-move`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user to-move games: ${error.message}`);
                throw new Error('Failed to fetch user to-move games');
            }
        });
    }
    fetchUserGamesArchives() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/games/archives`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user games archives: ${error.message}`);
                throw new Error('Failed to fetch user games archives');
            }
        });
    }
    fetchUserCompletedMonthlyArchives(month, year) {
        return __awaiter(this, void 0, void 0, function* () {
            if (month.length !== 2 || year.length !== 4) {
                throw new Error("Invalid month or year provided. Please provide month in MM format and year in YYYY format");
            }
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/games/${year}/${month}`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user completed monthly archives: ${error.message}`);
                throw new Error('Failed to fetch user completed monthly archives');
            }
        });
    }
    fetchUserCompletedMonthlyArchivesPGN(month, year) {
        return __awaiter(this, void 0, void 0, function* () {
            if (month.length !== 2 || year.length !== 4) {
                throw new Error("Invalid month or year provided. Please provide month in MM format and year in YYYY format");
            }
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/games/${year}/${month}/pgn`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user completed monthly archives PGN: ${error.message}`);
                throw new Error('Failed to fetch user completed monthly archives PGN');
            }
        });
    }
    fetchUserClubs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/clubs`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user clubs: ${error.message}`);
                throw new Error('Failed to fetch user clubs');
            }
        });
    }
    fetchUserMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/matches`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user matches: ${error.message}`);
                throw new Error('Failed to fetch user matches');
            }
        });
    }
    fetchUserTournaments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/player/${this.username}/tournaments`);
                return response.data;
            }
            catch (error) {
                console.error(`Failed to fetch user tournaments: ${error.message}`);
                throw new Error('Failed to fetch user tournaments');
            }
        });
    }
}
exports.User = User;
