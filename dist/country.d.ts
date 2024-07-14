import { Country } from './types';
export declare class CountryDetails {
    private iso;
    constructor(iso: string);
    fetchDetails(): Promise<Country>;
    getPlayers(): Promise<string[]>;
    getClubs(): Promise<string[]>;
}
