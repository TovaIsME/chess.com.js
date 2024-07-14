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
exports.Clubs = void 0;
const chessApiClient_1 = __importDefault(require("./api/chessApiClient"));
class Clubs {
    constructor(ClubsUrlID) {
        this.ClubsUrlID = ClubsUrlID;
    }
    fetchClubDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/club/${this.ClubsUrlID}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching club details");
            }
        });
    }
    fetchClubMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/club/${this.ClubsUrlID}/members`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching club members");
            }
        });
    }
    fetchClubMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield chessApiClient_1.default.get(`/club/${this.ClubsUrlID}/matches`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching club matches");
            }
        });
    }
}
exports.Clubs = Clubs;
