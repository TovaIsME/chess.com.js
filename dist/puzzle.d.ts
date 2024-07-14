import { PuzzleData } from './types';
export declare class Puzzle {
    fetchDailyPuzzle(): Promise<PuzzleData>;
    fetchRandomDailyPuzzle(): Promise<PuzzleData>;
}
