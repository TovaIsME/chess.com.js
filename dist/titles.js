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
exports.Titles = void 0;
const chessApiClient_1 = __importDefault(require("./api/chessApiClient"));
class Titles {
    constructor(Title) {
        this.Title = Title;
    }
    fetchTitleDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validTitles = ['GM', 'WGM', 'IM', 'WIM', 'FM', 'WFM', 'NM', 'WNM', 'CM', 'WCM'];
                if (!validTitles.includes(this.Title)) {
                    throw new Error("Invalid Title provided for fetching titled players. Valid titles are GM, WGM, IM, WIM, FM, WFM, NM, WNM, CM, WCM");
                }
                const response = yield chessApiClient_1.default.get(`/titled/${this.Title}`);
                return { players: response.data.players };
            }
            catch (error) {
                throw new Error("Error fetching titled players");
            }
        });
    }
}
exports.Titles = Titles;
