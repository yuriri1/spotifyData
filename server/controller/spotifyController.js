const { getArtist, getSong } = require("../services/spotify-webapi");

class SpotifyController {
  static async getArtistData(req, res) {
    const artist = req.body.artist;
    const artistData = await getArtist(artist);
    res.status(200).json(artistData);
  }

  static async getSongData(req, res) {
    const song = req.body.song;
    const artist = req.body.artist;
    const songData = await getSong(song, artist);
    res.status(200).json(songData);
  }
}

module.exports = SpotifyController;
