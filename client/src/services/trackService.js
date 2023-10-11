import axios from "axios";

const baseURL = "http://localhost:3001";

const getMostPlayedArtist = async () => {
  const response = await axios.get(`${baseURL}/artists`);
  return response.data;
};

const getMostPlayedSongs = async () => {
  const response = await axios.get(`${baseURL}/songs`);
  return response.data;
};

const getArtistData = async (artist) => {
  const response = await axios.post(`${baseURL}/artists`, { artist });
  return response.data;
};

const getSongData = async (song, artist) => {
  const response = await axios.post(`${baseURL}/songs`, { song, artist });
  return response.data;
};

const getArtistOfMonthByYear = async (year) => {
  const response = await axios.get(`${baseURL}/artists-by-month/${year}`);
  return response.data;
};

export {
  getMostPlayedArtist,
  getMostPlayedSongs,
  getArtistData,
  getSongData,
  getArtistOfMonthByYear,
};
