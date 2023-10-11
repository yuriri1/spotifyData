<template>
  <div class="player-bar">
    <div class="song">
      <div v-if="userPhoto" class="song-img">
        <img :src="userPhoto" alt="user photo" />
      </div>
      <div v-else class="song-img">
        <img src="https://cdn-icons-png.flaticon.com/512/727/727399.png" alt="user photo" />
      </div>
      <div class="song-info">
        <span class="song-title">{{ userName }}</span>
        <span class="song-artist">{{ accountCreation }}</span>
      </div>
    </div>
    <div class="progress-bar">
      <div class="action-buttons">
        <span class="material-icons">
          shuffle
        </span>
        <span class="material-icons">
          skip_previous
        </span>
        <span class="material-icons" style="font-size: 3rem;">
          play_circle
        </span>
        <span class="material-icons">
          skip_next
        </span>
        <span class="material-icons">
          repeat
        </span>
      </div>
      <div class="bar">
        <div class="progress"></div>
      </div>
    </div>
    <div class="configs">
      <span class="material-icons">
        mic_external_on
      </span>
      <span class="material-icons">
        queue_music
      </span>
      <span class="material-icons">
        devices
      </span>
      <span class="material-icons">
        volume_up
      </span>
      <div class="volume-bar">
        <div class="volume"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUserName, getUserPhoto, getAccountCreation } from '../services/userService';

const userName = ref('')
const userPhoto = ref('')
const accountCreation = ref('')

onMounted(() => {
  getUserName().then((name) => {
    userName.value = name
  })

  getUserPhoto().then((photo) => {
    userPhoto.value = photo
  })

  getAccountCreation().then((creation) => {
    accountCreation.value = creation
  })
});

</script>

<style lang="scss">
.player-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: var(--dark);
  color: var(--light);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.75rem;
  }

  .song {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 20%;
    height: 100%;
    margin-right: 10px;

    .song-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .song-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;

      .song-title {
        font-size: 1rem;
        font-weight: 600;
      }

      .song-artist {
        font-size: 0.75rem;
        font-weight: 400;
      }

      span {
        margin: 2.5px;
      }
    }
  }

  .progress-bar {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .action-buttons {
      margin: 10px;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .bar {
      width: 40%;
      height: 5px;
      background-color: var(--light);
      border-radius: 5px;
      margin: 0 10px;

      .progress {
        width: 50%;
        height: 100%;
        background-color: var(--green);
        border-radius: 5px;
      }
    }
  }

  .configs {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;

    .volume-bar {
      width: 40%;
      height: 5px;
      background-color: var(--light);
      border-radius: 5px;
      margin: 0 10px;

      .volume {
        width: 50%;
        height: 100%;
        background-color: var(--green);
        border-radius: 5px;
      }
    }
  }
}
</style>