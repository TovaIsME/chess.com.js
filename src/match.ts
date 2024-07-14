import chessApiClient from './api/chessApiClient';
import { MatchData } from './types';
export class Match {
  private MatchID : string;

  constructor(MatchID: string) {
    this.MatchID = MatchID;
  }

    async fetchMatchDetails(): Promise<MatchData> {
        try {
            const response = await chessApiClient.get<MatchData>(`/match/${this.MatchID}`);
            return response.data;
        }
        catch (error) {
            throw new Error("Error fetching match details");
        }
    }

    async fetchMatchBoardDetails(board: number): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/match/${this.MatchID}/${board}`);
            return response.data;
        }
        catch (error) {
            throw new Error("Error fetching match board details");
        }
    }

    async fetchLiveMatchDetails(): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/match/live/${this.MatchID}`);
            return response.data;
        }
        catch (error) {
            throw new Error("Error fetching live match details");
        }
    }

    async fetchLiveMatchBoardDetails(board: number): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/match/live/${this.MatchID}/${board}`);
            return response.data;
        }
        catch (error) {
            throw new Error("Error fetching live match board details");
        }
    }
  
}
