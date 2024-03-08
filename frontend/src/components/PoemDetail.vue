<template>
  <div class="flex flex-col items-center justify-center relative">
    <img :src="`${$uploadUrl}/${poem?.img}`" alt="hero" class="sm:max-w-xs max-w-44 sm:mb-10 sm:mt-4 lg:mt-20 mt-28">
    <p class="sm:text-5xl text-3xl font-semibold italic text-center text-primary font-playfair m-6">{{ poem?.titleTm }}
    </p>
    <img :src="nagys" alt="img" class="w-full sm:m-10 m-4">

    <div style="width: 50px; height: 50px;"></div>
    <div style="margin-bottom: 20px;">
      <audio style="width: 400px;" :src="`${$uploadUrl}/${poem?.sound}`" controls></audio>
    </div>

    <div class="relative overflow-hidden">
      <div class="feather">
        <pre class="sm:text-2xl text-xl text-center text-primary font-medium font-playfair mt-5 relative z-1">
          {{ poem?.descTm }}
        </pre>
      </div>
    </div>
    <img :src="nagys" alt="img" class="w-full sm:mt-16 mt-10">

  </div>
</template>

<script>
import nagys from '../assets/image/nagys.png';
export default {
  data() {
    return {
      nagys: nagys,
      poem: null
    };
  },
  async created() {
    await this.getPoemDetail()
  },
  methods: {
    async getPoemDetail() {
      try {
        const id = this.$route.params.id
        const poem = await this.$appAxios.get(`/poems/${id}`)
        console.log(poem.data.detail);
        this.poem = poem.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};

</script>

<style lang="scss">
.feather {
  position: relative;
}

.feather::before {
  content: '';
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/feather.png');
  background-repeat: repeat-y;
  z-index: -1;
  background-size: 300px 300px;
  background-position: center center;
}

@media (max-width: 640px) {
  .feather-background::before {
    background-size: contain;
  }
}

.audio-player {
  height: 50px;
  width: 350px;
  background: #FFE5D4;
  font-family: arial;
  color: #B4640A;
  font-size: 0.75em;
  overflow: hidden;
  display: grid;
  grid-template-rows: 6px auto;

  .timeline {
    background: #FFCEAD;
    width: 100%;
    position: relative;
    cursor: pointer;
    box-shadow: 0 2px 10px 0 rgb(240, 180, 113);

    .progress {
      background: coral;
      width: 0%;
      height: 100%;
      transition: 0.25s;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 20px;

    >* {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .toggle-play {
      &.play {
        cursor: pointer;
        position: relative;
        left: 0;
        height: 0;
        width: 0;
        border: 7px solid #0000;
        border-left: 13px solid white;

        &:hover {
          transform: scale(1.1);
        }
      }

      &.pause {
        height: 15px;
        width: 20px;
        cursor: pointer;
        position: relative;

        &:before {
          position: absolute;
          top: 0;
          left: 0px;
          background: white;
          content: "";
          height: 15px;
          width: 3px;
        }

        &:after {
          position: absolute;
          top: 0;
          right: 8px;
          background: white;
          content: "";
          height: 15px;
          width: 3px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .time {
      display: flex;

      >* {
        padding: 2px;
      }
    }

    .volume-container {
      cursor: pointer;

      .volume-button {
        height: 26px;
        display: flex;
        align-items: center;

        .volume {
          transform: scale(0.7);
        }
      }

      position: relative;
      z-index: 2;

      .volume-slider {
        position: absolute;
        left: -3px;
        top: 15px;
        z-index: -1;
        width: 0;
        height: 15px;
        background: white;
        box-shadow: 0 0 20px #000a;
        transition: 0.25s;

        .volume-percentage {
          background: coral;
          height: 100%;
          width: 75%;
        }
      }

      &:hover {
        .volume-slider {
          left: -123px;
          width: 120px;
        }
      }
    }
  }
}
</style>
