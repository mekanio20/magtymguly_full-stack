<template>
  <div class="relative">
    <div class="flex flex-col items-center justify-center sm:mt-4 lg:mt-20 mt-36">
      <div class="font-semibold xl:text-5xl text-[36px] font-crimson italic relative my-[-25px]">
        Filmler we sahnalar
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>
    
    <div> 
    <div class="relative overflow-hidden">
      <div class="feather-background">
        <div class="sm:mt-10 mt-9 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-8 relative z-1">
          <FilmCard v-for="film in films" :key="film.id" :imgURL="`${$uploadUrl}/${film.video}`" :name="film.titleTm" :small="film.awtor" :description="film.time" :url="`/filmdetail/${film.id}`" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import underline from '../assets/image/underline.png';
import FilmCard from "./FilmCard.vue";
export default {
  data() {
    return {
      underline: underline,
      films: null,
    };
  },
  components: {
    FilmCard,
  },
  async created() {
    await this.getFilms()
  },
  methods: {
    async getFilms() {
      try {
        const films = await this.$appAxios.get('/films')
        this.films = await films.data.detail.rows
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
