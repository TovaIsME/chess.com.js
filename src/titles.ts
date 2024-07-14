import chessApiClient from './api/chessApiClient';
import { TitlesData } from './types';
export class Titles {
  private Title : string;

  constructor(Title: string) {
    this.Title = Title;
  }

    async fetchTitleDetails(): Promise<TitlesData> {
        try {
            const validTitles: string[] = ['GM', 'WGM', 'IM', 'WIM', 'FM', 'WFM', 'NM', 'WNM', 'CM', 'WCM'];
            if(!validTitles.includes(this.Title)) {
                throw new Error("Invalid Title provided for fetching titled players. Valid titles are GM, WGM, IM, WIM, FM, WFM, NM, WNM, CM, WCM");  
            }
    
            const response = await chessApiClient.get<TitlesData>(`/titled/${this.Title}`);
            return { players: response.data.players };
        }
        catch (error) {
            throw new Error("Error fetching titled players");
        }
    }
  
}
