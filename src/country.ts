import axios from 'axios';
import { Country } from './types';

export class CountryDetails {
  private iso: string;

  constructor(iso: string) {
    this.iso = iso;
  }

  async fetchDetails(): Promise<Country> {
    try{
      const response = await axios.get(`https://api.chess.com/pub/country/${this.iso}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching country details this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
    }
  }

  async getPlayers(): Promise<string[]> {
    try{
      const response = await axios.get(`https://api.chess.com/pub/country/${this.iso}/players`);
      return response.data.players;
    } catch (error) {
      throw new Error("Error fetching country players this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
    }
  }

  async getClubs(): Promise<string[]> {
    try{
      const response = await axios.get(`https://api.chess.com/pub/country/${this.iso}/clubs`);
      return response.data.clubs;
    } catch (error) {
      throw new Error("Error fetching country clubs this is because the country code is invalid or does not exist. Please check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements");
    }
  }
}
