<template>
  <div v-for="d in data" class="artist">
    <a v-bind:href="d.spotifyPage" target="_blank">
      <img :src="d.image">
    </a>
    <div class="album">
      <span class="track-name">{{ d.name }}</span>
      <span class="artist-name">{{ d.artist }}</span>
    </div>
    <span class="count">
      <span class="count-number">{{ d.quantity }}x</span>
      <span class="count-text"> plays</span>
    </span>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  options: {
    type: Object,
    required: true
  }
});

onMounted(async () => {
});

</script>
<style lang="scss">
.artist {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 1rem;
  height: 5rem;
  width: 90%;
  border-radius: 20px;
  background-color: var(--grey);
  cursor: pointer;

  &:hover {
    background-color: var(--dark-grey);
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .album {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    .track-name {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--light);
    }

    .artist-name {
      font-size: 1rem;
      color: var(--light);
    }
  }

  .count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    font-size: 1.2rem;
    color: var(--ligth);
    font-weight: 500;
  }

  .count-number {
    font-size: 1.5rem;
    color: var(--light);
  }

  .count-text {
    font-size: 0.8rem;
    color: var(--light);
  }
}
</style>