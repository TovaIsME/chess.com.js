import chessApiClient from './api/chessApiClient';

interface Player {
  username: string;
  rating: number;
  rd?: number;
  timeout_percent?: number;
  status: string;
}

interface Team {
  "@id": string;
  url: string;
  name: string;
  score: number;
  players: Player[];
}

interface GameData {
  name: string;
  url: string;
  description: string;
  start_time: number;
  settings: {
    time_class: string;
    time_control: string;
    initial_setup?: string;
    rules: string;
    min_team_players: number;
    max_team_players: number;
    min_required_games: number;
    min_rating?: number;
    max_rating?: number;
    autostart: boolean;
  };
  status: string;
  boards: number;
  teams: {
    team1: Team;
    team2: Team;
  };
  fair_play_removals?: string[];
}

export class Game {
  private gameId: string;

  constructor(gameId: string) {
    this.gameId = gameId;
  }

  async fetchGameDetails(): Promise<GameData> {
    try {
      const response = await chessApiClient.get<GameData>(`/match/${this.gameId}`);
       return response.data;
    } catch (error) {
      throw new Error("Error fetching game details");
    }
    
  }

  async fetchBoardDetails(boardId: number): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/match/${this.gameId}/${boardId}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching board details");
    }
  }

  async fetchLiveGameDetails(): Promise<GameData> {
    try {
      const response = await chessApiClient.get<GameData>(`/match/live/${this.gameId}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching live game details");
    }
  }

  async fetchLiveBoardDetails(boardId: number): Promise<any> {
    try {
      const response = await chessApiClient.get<any>(`/match/live/${this.gameId}/${boardId}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching live board details");
    }
  }
}
