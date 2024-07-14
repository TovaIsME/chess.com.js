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
exports.CountryDetails = void 0;
const axios_1 = __importDefault(require("axios"));
class CountryDetails {
    constructor(iso) {
        this.iso = iso;
    }
    fetchDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://api.chess.com/pub/country/${this.iso}`);
                return response.data;
            }
            catch (error) {
                throw new Error("Error fetching country details this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
            }
        });
    }
    getPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://api.chess.com/pub/country/${this.iso}/players`);
                return response.data.players;
            }
            catch (error) {
                throw new Error("Error fetching country players this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
            }
        });
    }
    getClubs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://api.chess.com/pub/country/${this.iso}/clubs`);
                return response.data.clubs;
            }
            catch (error) {
                throw new Error("Error fetching country clubs this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
            }
        });
    }
}
exports.CountryDetails = CountryDetails;
