import axios from 'axios';

const chessApiClient = axios.create({
  baseURL: 'https://api.chess.com/pub',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default chessApiClient;
