import chessApiClient from './api/chessApiClient';
import { PuzzleData } from './types';

export class Puzzle {
  async fetchDailyPuzzle(): Promise<PuzzleData> {
    try {
      const response = await chessApiClient.get<PuzzleData>('/puzzle');
      return response.data;
    }
    catch (error) {
      throw new Error("Error fetching daily puzzle");
    }
  }

  async fetchRandomDailyPuzzle(): Promise<PuzzleData> {
    try {
      const response = await chessApiClient.get<PuzzleData>('/puzzle/random');
      return response.data;
    }
    catch (error) {
      throw new Error("Error fetching random daily puzzle");
    }
  }
}
