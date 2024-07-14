import { UserData, UserStats } from './types';
export declare class User {
    private username;
    constructor(username: string);
    fetchUserDetails(): Promise<UserData>;
    fetchUserStats(): Promise<UserStats>;
    isUserOnline(): Promise<boolean>;
    fetchUserGames(): Promise<any>;
    fetchUserToMoveGames(): Promise<any>;
    fetchUserGamesArchives(): Promise<any>;
    fetchUserCompletedMonthlyArchives(month: string, year: string): Promise<any>;
    fetchUserCompletedMonthlyArchivesPGN(month: string, year: string): Promise<any>;
    fetchUserClubs(): Promise<any>;
    fetchUserMatches(): Promise<any>;
    fetchUserTournaments(): Promise<any>;
}
