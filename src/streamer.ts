import chessApiClient from './api/chessApiClient';
import { StreamerData } from './types';

export class Streamers {
  async fetchChessComStreamers(): Promise<StreamerData[]> {
    try {
      const response = await chessApiClient.get<StreamerData[]>('/streamers');
      return response.data;
    }
    catch (error) {
      throw new Error("Error fetching streamers");
    }
  }
}
