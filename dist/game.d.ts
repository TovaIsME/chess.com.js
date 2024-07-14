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
export declare class Game {
    private gameId;
    constructor(gameId: string);
    fetchGameDetails(): Promise<GameData>;
    fetchBoardDetails(boardId: number): Promise<any>;
    fetchLiveGameDetails(): Promise<GameData>;
    fetchLiveBoardDetails(boardId: number): Promise<any>;
}
export {};
