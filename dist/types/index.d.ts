export interface UserProfile {
    "@id": string;
    username: string;
    status: string;
}
export interface Game {
    id: string;
    white: string;
    black: string;
    url: string;
    fen: string;
    pgn: string;
    start_time: number;
    rated: boolean;
    time_class: string;
    rules: string;
    eco: string;
    white_rating: number;
    black_rating: number;
    time_control: string;
    end_time: number;
    tournament: string;
    match: string;
    match_url: string;
    round: number;
    speed: string;
    perf: string;
    clock: string;
    winner: string;
    status: string;
    seconds: number;
    last_activity: number;
    tournament_id: string;
    match_id: string;
    is_tv: boolean;
    is_analyse: boolean;
    is_live: boolean;
    is_archive: boolean;
    is_stalemate: boolean;
    is_insufficient: boolean;
    is_checkmate: boolean;
    is_repetition: boolean;
    is_draw: boolean;
    is_resign: boolean;
    is_timeout: boolean;
    is_variant: boolean;
    is_puzzle: boolean;
    is_at: boolean;
    is_game: boolean;
    is_challenge: boolean;
    is_tournament: boolean;
    is_match: boolean;
}
export interface Country {
    "@id": string;
    name: string;
    code: string;
}
export interface PuzzleData {
    title: string;
    url: string;
    publish_time: number;
    fen: string;
    pgn: string;
    image: string;
}
export interface StreamerData {
    username: string;
    avatar: string;
    twitch_url: string;
    url: string;
}
export interface LeaderboardData {
    player_id: number;
    "@id": string;
    url: string;
    username: string;
    score: number;
    rank: number;
}
export interface GameData {
    id: string;
    white: string;
    black: string;
    moves: any[];
}
export interface UserData {
    player_id: number;
    username: string;
    name: string;
    avatar: string;
    title: string;
    location: string;
    country: string;
    last_online: number;
    joined: number;
    status: string;
    is_streamer: boolean;
    twitch_url: string;
    fide: number;
    chess_com: number;
    total_points: number;
    followers: number;
    is_verified: boolean;
}
export interface Stats {
    last: number;
    best: number;
    record: number;
}
export interface UserStats {
    player_id: number;
    username: string;
    chess_daily: Stats;
    chess_rapid: Stats;
    chess_bullet: Stats;
    fide: number;
    tactics: Stats;
    lessons: Stats;
    puzzle_rush: Stats;
    puzzle_rush_daily: Stats;
    puzzle_rush_monthly: Stats;
    puzzle_rush_best: Stats;
    puzzle_rush_daily_record: Stats;
    puzzle_rush_monthly_record: Stats;
    puzzle_rush_best_record: Stats;
}
export interface TitlesData {
    players: string[];
}
export interface ClubsUrlID {
    "@id": string;
    "name": string;
    "club_id": number;
    "icon": string;
    "country": string;
    "average_daily_rating": number;
    "members_count": number;
    "created": number;
    "last_activity": number;
    "visibility": string;
    "join_request": string;
    "admin": any[];
    "description": string;
    "weekly": [
        {
            "username": string;
            "joined": number;
        }
    ];
    "monthly": [
        {
            "username": string;
            "joined": string;
        }
    ];
    "all_time": [
        {
            "username": string;
            "joined": number;
        }
    ];
    "finished": [
        {
            "name": string;
            "@id": string;
            "opponent": string;
            "result": string;
            "start_time": number;
            "time_class": string;
        }
    ];
    "in_progress": [
        {
            "name": string;
            "@id": string;
            "opponent": string;
            "start_time": number;
            "time_class": string;
        }
    ];
    "registered": [
        {
            "name": string;
            "@id": string;
            "opponent": string;
            "time_class": string;
        }
    ];
}
export interface TournamentData {
    name: string;
    url: string;
    description: string;
    creator: string;
    status: string;
    finish_time: number;
    settings: {
        type: string;
        rules: string;
        time_class: string;
        time_control: string;
        is_rated: boolean;
        is_official: boolean;
        is_invite_only: boolean;
        initial_group_size: number;
        user_advance_count: number;
        use_tiebreak: boolean;
        allow_vacation: boolean;
        winner_places: number;
        registered_user_count: number;
        games_per_opponent: number;
        total_rounds: number;
        concurrent_games_per_opponent: number;
    };
    players: any[];
    rounds: any[];
    groups: any[];
    fair_play_removals: any[];
    games: {
        white: string;
        black: string;
        url: string;
        fen: string;
        pgn: string;
        turn: string;
        move_by: number;
        draw_offer: string;
        last_activity: number;
        start_time: number;
        time_control: string;
        time_class: string;
        rules: string;
        eco: string;
        tournament: string;
    }[];
}
export interface MatchData {
    name: string;
    url: string;
    description: string;
    start_time: number;
    settings: {
        time_class: string;
        time_control: string;
        initial_setup: string;
        rules: string;
        min_team_players: number;
        max_team_players: number;
        min_required_games: number;
        min_rating: number;
        max_rating: number;
        autostart: boolean;
    };
    status: string;
    boards: number;
    teams: {
        team1: {
            "@id": string;
            url: string;
            name: string;
            score: number;
            players: [
                {
                    username: string;
                    board: string;
                    rating: number;
                    rd: number;
                    timeout_percent: number;
                    status: string;
                }
            ];
        };
        team2: {
            "@id": string;
            url: string;
            name: string;
            score: number;
            players: [
                {
                    username: string;
                    board: string;
                    rating: number;
                    rd: number;
                    timeout_percent: number;
                    status: string;
                }
            ];
        };
    };
    board_scores: {
        player1: number;
        player2: number;
    };
    games: [
        {
            white: {
                username: string;
                rating: number;
                result: string;
                "@id": string;
                team: string;
            };
            black: {
                username: string;
                rating: number;
                result: string;
                "@id": string;
                team: string;
            };
            accuracies: {
                white: number;
                black: number;
            };
            url: string;
            fen: string;
            pgn: string;
            start_time: number;
            end_time: number;
            time_control: string;
            time_class: string;
            rules: string;
            eco: string;
            match: string;
        }
    ];
}
