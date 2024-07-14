import { TournamentData } from './types';
export declare class Tournament {
    private UrlID;
    constructor(UrlID: string);
    fetchTournamentDetails(): Promise<TournamentData>;
    fetchTournamentRoundDetails(round: number): Promise<any>;
    fetchTournamentRoundGroupDetails(round: number, group: number): Promise<any>;
}
