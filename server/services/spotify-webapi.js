const SpotifyWebApi = require("spotify-web-api-node");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const verifySongToArtist = async (songs, artist) => {
  return songs.filter((song) => {
    return song.artists[0].name === artist;
  });
};

const getArtistMostFollowers = async (artists) => {
  let mostFollows = 0;
  let artistMostFollowers = null;

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const totalFollows = artist.followers.total;

    if (totalFollows > mostFollows) {
      mostFollows = totalFollows;
      artistMostFollowers = artist;
    }
  }

  return artistMostFollowers;
};

const getAcessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
  });

  const data = await response.json();
  return data.access_token;
};

const getArtist = async (artist) => {
  const token = await getAcessToken();

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const artistData = getArtistMostFollowers(data.artists.items);

    return artistData;
  } catch (error) {
    console.log(error);
  }
};

const getSong = async (song, artist) => {
  const token = await getAcessToken();

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${song}&type=track&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    const songs = data.tracks.items;
    const songData = await verifySongToArtist(songs, artist);

    if (songData.length === 0) {
      return {
        error: "Song not found",
      };
    }

    return songData[0];
  } catch (error) {
    console.log(error);
  }
};

(async () => {})();

module.exports = { getArtist, getSong };
