import { TitlesData } from './types';
export declare class Titles {
    private Title;
    constructor(Title: string);
    fetchTitleDetails(): Promise<TitlesData>;
}
