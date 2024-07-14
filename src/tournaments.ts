import chessApiClient from './api/chessApiClient';
import { TournamentData } from './types';
export class Tournament {
  private UrlID : string;

  constructor(UrlID: string) {
    this.UrlID = UrlID;
  }

    async fetchTournamentDetails(): Promise<TournamentData> {
        try {
            const response = await chessApiClient.get<TournamentData>(`/tournament/${this.UrlID}`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching tournament details");
        }
    }

    async fetchTournamentRoundDetails(round: number): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/tournament/${this.UrlID}/${round}`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching tournament round details");
        }
    }

    async fetchTournamentRoundGroupDetails(round: number, group: number): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/tournament/${this.UrlID}/${round}/${group}`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching tournament round group details");
        }
    }
  
}
