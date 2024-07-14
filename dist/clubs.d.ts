import { ClubsUrlID } from './types';
export declare class Clubs {
    private ClubsUrlID;
    constructor(ClubsUrlID: string);
    fetchClubDetails(): Promise<ClubsUrlID>;
    fetchClubMembers(): Promise<any>;
    fetchClubMatches(): Promise<any>;
}
