import { MatchData } from './types';
export declare class Match {
    private MatchID;
    constructor(MatchID: string);
    fetchMatchDetails(): Promise<MatchData>;
    fetchMatchBoardDetails(board: number): Promise<any>;
    fetchLiveMatchDetails(): Promise<any>;
    fetchLiveMatchBoardDetails(board: number): Promise<any>;
}
