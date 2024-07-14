import chessApiClient from './api/chessApiClient';
import { LeaderboardData } from './types';

export class Leaderboards {
  async fetchDailyLeaderboard(): Promise<LeaderboardData[]> {
    try {
      const response = await chessApiClient.get<LeaderboardData[]>('/leaderboards');
      return response.data;
    } catch (error) {
      throw new Error("Error fetching daily leaderboard");
    }
  }
}
