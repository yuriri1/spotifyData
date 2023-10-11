<template>
  <div class="charts">
    <div class="chart-month">
      <h1>As mais ouvidas por mês</h1>
      <ChartMonths />
    </div>
    <div class="trendings">
      <h1>Mais ouvidas</h1>
      <MostPlayed :data="artistData" :options="{ type: 'artist' }" />
      <MostPlayed :data="songData" :options="{ type: 'song' }" />
    </div>
  </div>
</template>
<script setup>
import ChartMonths from './ChartMonths.vue';
import MostPlayed from './MostPlayed.vue';
import { ref, onMounted } from 'vue';
import { getMostPlayedArtist, getMostPlayedSongs } from '../services/trackService'
import { artistMostPlayed, songMostPlayed } from '../utils/spotifyObjectData'

const songs = ref([]);
const artists = ref([]);
const artistData = ref([]);
const songData = ref([]);

onMounted(async () => {
  artists.value = await getMostPlayedArtist();
  songs.value = await getMostPlayedSongs();

  artistData.value = await artistMostPlayed(artists.value);
  songData.value = await songMostPlayed(songs.value);
});

</script>
<style lang="scss">
.charts {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  display: flex;
  background-color: var(--ligth-dark);

  .chart-month {
    width: 100%;
    height: 100%;
    background-color: var(--light-grey);
  }

  .trendings {
    width: 50%;
    height: 100%;
    background-color: var(--grey);
  }
}
</style>