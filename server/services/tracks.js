const artitsMostListenedTo = (streamingHistory) => {
  const artistCount = {};
  streamingHistory.forEach((song) => {
    if (artistCount[song.artistName]) {
      artistCount[song.artistName] += 1;
    } else {
      artistCount[song.artistName] = 1;
    }
  });

  const sortedArtists = Object.entries(artistCount).sort((a, b) => b[1] - a[1]);

  return sortedArtists;
};

const songsMostListenedTo = (streamingHistory) => {
  const songCount = {};
  streamingHistory.forEach((song) => {
    if (songCount[song.trackName]) {
      songCount[song.trackName][0] += 1;
    } else {
      songCount[song.trackName] = [1, song.artistName];
    }
  });

  const sortedSongs = Object.entries(songCount).sort(
    (a, b) => b[1][0] - a[1][0]
  );

  return sortedSongs;
};

const songsMostListenedToMinutes = (streamingHistory) => {
  const songCount = {};
  streamingHistory.forEach((song) => {
    if (songCount[song.trackName]) {
      songCount[song.trackName][0] += song.msPlayed;
    } else {
      songCount[song.trackName] = [song.msPlayed, song.artistName];
    }
  });

  const sortedSongs = Object.entries(songCount).sort(
    (a, b) => b[1][0] - a[1][0]
  );

  console.log(sortedSongs);

  sortedSongs.forEach((song) => {
    song[1][0] = Math.round(song[1][0] / 60000);
  });

  return sortedSongs;
};

const artistMostListenedByMonth = (streamingHistory, year) => {
  const months = Array.from({ length: 12 }, () => []);
  console.log(months);

  streamingHistory.forEach((song) => {
    if (song.endTime.split("-")[0] === year) {
      const monthIndex = parseInt(song.endTime.split("-")[1]) - 1;
      if (months[monthIndex]) {
        months[monthIndex].push(song);
      }
    }
  });

  const artistCount = months.map((month) => {
    const artistCounts = {};
    month.forEach((song) => {
      if (artistCounts[song.artistName]) {
        artistCounts[song.artistName] += 1;
      } else {
        artistCounts[song.artistName] = 1;
      }
    });
    return artistCounts;
  });

  const sortedArtists = artistCount.map((month) =>
    Object.entries(month).sort((a, b) => b[1] - a[1])
  );

  return sortedArtists;
};

module.exports = {
  artitsMostListenedTo,
  songsMostListenedTo,
  songsMostListenedToMinutes,
  artistMostListenedByMonth,
};
