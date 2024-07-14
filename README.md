# chess.com.js
## NOTE: THIS IS MY FIRST EVER COMPLETED PROJECT EXCPECT SOME ERRORS.
## Introduction

`chess.com.js` is a Node.js package designed to simplify interactions with the Chess.com API. It provides methods to fetch various data such as player details, club information, game statistics, and more.

## Installation

```bash
npm install chess.com.js
```
# Usage

## Initialization
```javascript
const { Clubs, CountryDetails, Game, Leaderboards, Match, Puzzle, Streamers, Titles, Tournament, User } = require('chess.com.js');
```

## Example Usage

clubs
```javascript
const clubId = 'example-club-id';
const club = new Clubs(clubId);

try {
  const clubDetails = await club.fetchClubDetails();
  const clubMembers = await club.fetchClubMembers();
  const clubMatches = await club.fetchClubMatches();
  console.log('Club Details:', clubDetails);
  console.log('Club Members:', clubMembers);
  console.log('Club Matches:', clubMatches);
} catch (error) {
  console.error('Error fetching club data:', error.message);
}
```

Country Details
```javascript 
const countryIso = 'US';
const country = new CountryDetails(countryIso);

try {
  const countryInfo = await country.fetchDetails();
  const countryPlayers = await country.getPlayers();
  const countryClubs = await country.getClubs();
  console.log('Country Info:', countryInfo);
  console.log('Country Players:', countryPlayers);
  console.log('Country Clubs:', countryClubs);
} catch (error) {
  console.error('Error fetching country data:', error.message);
}
```

Game
```javascript
const gameId = 'example-game-id';
const game = new Game(gameId);

try {
  const gameDetails = await game.fetchGameDetails();
  const boardDetails = await game.fetchBoardDetails(1);
  const liveGameDetails = await game.fetchLiveGameDetails();
  const liveBoardDetails = await game.fetchLiveBoardDetails(1);
  console.log('Game Details:', gameDetails);
  console.log('Board Details:', boardDetails);
  console.log('Live Game Details:', liveGameDetails);
  console.log('Live Board Details:', liveBoardDetails);
} catch (error) {
  console.error('Error fetching game data:', error.message);
}
```

## Additional Classes
The package also includes classes for fetching Leaderboards, Matches, Puzzles, Streamers, Titles, Tournaments, and User data. Each class provides methods to fetch specific data from the Chess.com API.

## Error Handling
Errors thrown during API requests include informative messages to assist in debugging and handling exceptions.
