import axios from "axios";
import { getArtistData, getSongData } from "../services/trackService.js";

class artistData {
  constructor(name, image, quantity, url) {
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.spotifyPage = url;
  }
}

class songData {
  constructor(name, artist, image, quantity, url) {
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.quantity = quantity;
    this.spotifyPage = url;
  }
}

const artistMostPlayed = async (artists) => {
  const artistDataArray = [];

  for (let i = 0; i < 3; i++) {
    const artist = await getArtistData(artists[i][0]);
    const artistObject = new artistData(
      artist.name,
      artist.images[2].url,
      artists[i][1],
      artist.external_urls.spotify
    );
    artistDataArray.push(artistObject);
  }

  return artistDataArray;
};

const songMostPlayed = async (songs) => {
  const songDataArray = [];

  for (let i = 0; i < 3; i++) {
    const song = await getSongData(songs[i][0], songs[i][1][1]);
    const songObject = new songData(
      song.name,
      song.artists[0].name,
      song.album.images[2].url,
      songs[i][1][0],
      song.external_urls.spotify
    );
    songDataArray.push(songObject);
  }

  return songDataArray;
};

(async () => {})();

export { artistMostPlayed, songMostPlayed };
