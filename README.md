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
  club.fetchClubDetails().then((clubDetails) => {
    console.log('Club Details:', clubDetails);
  });
  club.fetchClubMembers().then((clubMembers) => {
    console.log('Club Members:', clubMembers);
  });
  club.fetchClubMatches().then((clubMatches) => {
    console.log('Club Matches:', clubMatches);
  });
} catch (error) {
  console.error('Error fetching club data:', error.message);
}
```

Country Details
```javascript 
const countryIso = 'US';
const country = new CountryDetails(countryIso);

try {
  country.fetchDetails().then((countryDetails) => {
    console.log('Country Details:', countryDetails);
  });
  country.getPlayers().then((countryPlayers) => {
    console.log('Country Players:', countryPlayers);
  });
  await country.getClubs().then((countryClubs) => {
    console.log('Country Clubs:', countryClubs);
  });
} catch (error) {
  console.error('Error fetching country data:', error.message);
}
```

Game
```javascript
const gameId = 'example-game-id';
const game = new Game(gameId);

try {
  game.fetchGameDetails().then((gameDetails) => {
    console.log('Game Details:', gameDetails);
  });
  game.fetchBoardDetails(1).then((boardDetails) => {
    console.log('Board Details:', boardDetails);
  });
  game.fetchLiveGameDetails().then((liveGameDetails) => {
    console.log('Live Game Details:', liveGameDetails);
  });
  game.fetchLiveBoardDetails(1).then((liveBoardDetails) => {
    console.log('Live Board Details:', liveBoardDetails);
  });
  } catch (error) {
  console.error('Error fetching game data:', error.message);
}
```
Working on improving this package.

## Additional Classes
The package also includes classes for fetching Leaderboards, Matches, Puzzles, Streamers, Titles, Tournaments, and User data. Each class provides methods to fetch specific data from the Chess.com API.

## Error Handling
Errors thrown during API requests include informative messages to assist in debugging and handling exceptions.
