const streamingHistory0 = require("../database/MyData/StreamingHistory0.json");
const streamingHistory1 = require("../database/MyData/StreamingHistory1.json");

const {
  artitsMostListenedTo,
  songsMostListenedTo,
  songsMostListenedToMinutes,
  artistMostListenedByMonth,
} = require("../services/tracks");

const removePodcasts = (streamingHistory) => {
  return streamingHistory.filter((song) => {
    return song.msPlayed < 400000;
  });
};

const streamingHistory = removePodcasts(streamingHistory0).concat(
  removePodcasts(streamingHistory1)
);

class TracksController {
  static async getArtists(req, res) {
    const artists = artitsMostListenedTo(streamingHistory);
    res.status(200).json(artists);
  }

  static async getSongs(req, res) {
    const songs = songsMostListenedTo(streamingHistory);
    res.status(200).json(songs);
  }

  static async getSongsMinutes(req, res) {
    const songs = songsMostListenedToMinutes(streamingHistory);
    res.status(200).json(songs);
  }

  static async getArtistsByMonth(req, res) {
    const year = req.params.year;
    const artists = artistMostListenedByMonth(streamingHistory, year);
    res.status(200).json(artists);
  }
}

module.exports = TracksController;
