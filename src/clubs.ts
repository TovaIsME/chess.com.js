import chessApiClient from './api/chessApiClient';
import { ClubsUrlID } from './types';
export class Clubs {
  private ClubsUrlID : string;

  constructor(ClubsUrlID: string) {
    this.ClubsUrlID = ClubsUrlID;
  }

    async fetchClubDetails(): Promise<ClubsUrlID> {
        try {
            const response = await chessApiClient.get<ClubsUrlID>(`/club/${this.ClubsUrlID}`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching club details");
        }
    }

    async fetchClubMembers(): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/club/${this.ClubsUrlID}/members`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching club members");
        }
    }

    async fetchClubMatches(): Promise<any> {
        try {
            const response = await chessApiClient.get<any>(`/club/${this.ClubsUrlID}/matches`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching club matches");
        }
    }
  
}
