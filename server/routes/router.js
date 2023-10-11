const express = require("express");

const TracksController = require("../controller/tracksController");
const userController = require("../controller/userController");
const SpotifyController = require("../controller/spotifyController");

const router = express.Router();

router.get("/artists", TracksController.getArtists);
router.get("/songs", TracksController.getSongs);
router.get("/songs-minutes", TracksController.getSongsMinutes);
router.get("/artists-by-month/:year", TracksController.getArtistsByMonth);

router.post("/artists", SpotifyController.getArtistData);
router.post("/songs", SpotifyController.getSongData);

router.get("/account-creation", userController.getAccountCreation);
router.get("/name", userController.getUserName);
router.get("/photo", userController.getUserPhoto);

module.exports = router;
