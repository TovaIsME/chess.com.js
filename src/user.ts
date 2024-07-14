import chessApiClient from './api/chessApiClient';
import { UserData, UserStats } from './types';

export class User {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  async fetchUserDetails(): Promise<UserData> {
    try {
      const response = await chessApiClient.get<UserData>(`/player/${this.username}`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user details: ${error.message}`);
      throw new Error('Failed to fetch user details');
    }
  }

  async fetchUserStats(): Promise<UserStats> {
    try {
      const response = await chessApiClient.get<UserStats>(`/player/${this.username}/stats`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user stats: ${error.message}`);
      throw new Error('Failed to fetch user stats');
    }
  }

  async isUserOnline(): Promise<boolean> {
    try {
      const response = await chessApiClient.get<UserData>(`/player/${this.username}`);
      return response.data.status === "online";
    } catch (error: any) {
      console.error(`Failed to check if user is online: ${error.message}`);
      throw new Error('Failed to check if user is online');
    }
  }

  async fetchUserGames(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/games`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user games: ${error.message}`);
      throw new Error('Failed to fetch user games');
    }
  }

  async fetchUserToMoveGames(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/games/to-move`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user to-move games: ${error.message}`);
      throw new Error('Failed to fetch user to-move games');
    }
  }

  async fetchUserGamesArchives(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/games/archives`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user games archives: ${error.message}`);
      throw new Error('Failed to fetch user games archives');
    }
  }

  async fetchUserCompletedMonthlyArchives(month: string, year: string): Promise<any> {
    if (month.length !== 2 || year.length !== 4) {
      throw new Error("Invalid month or year provided. Please provide month in MM format and year in YYYY format");
    }
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/games/${year}/${month}`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user completed monthly archives: ${error.message}`);
      throw new Error('Failed to fetch user completed monthly archives');
    }
  }

  async fetchUserCompletedMonthlyArchivesPGN(month: string, year: string): Promise<any> {
    if (month.length !== 2 || year.length !== 4) {
      throw new Error("Invalid month or year provided. Please provide month in MM format and year in YYYY format");
    }
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/games/${year}/${month}/pgn`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user completed monthly archives PGN: ${error.message}`);
      throw new Error('Failed to fetch user completed monthly archives PGN');
    }
  }

  async fetchUserClubs(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/clubs`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user clubs: ${error.message}`);
      throw new Error('Failed to fetch user clubs');
    }
  }

  async fetchUserMatches(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/matches`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user matches: ${error.message}`);
      throw new Error('Failed to fetch user matches');
    }
  }

  async fetchUserTournaments(): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/player/${this.username}/tournaments`);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch user tournaments: ${error.message}`);
      throw new Error('Failed to fetch user tournaments');
    }
  }
}
