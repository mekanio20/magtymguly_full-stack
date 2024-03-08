<template lang="">
    <div class="relative">
      <div class="flex flex-col items-center justify-center sm:mt-4 lg:mt-20 mt-36">
        <div class="font-semibold xl:text-5xl text-[36px] font-crimson italic relative my-[-25px] text-center">
            {{ film?.titleTm }}
        </div>
        <img :src="underline" alt="underline" class="w-64">
        <video width="100%" controls="controls" class='rounded-md sm:mt-12 mt-2'>
          <source :src="`${$uploadUrl}/${film.video}`" alt="video" type="video/mp4">
        </video>
      </div>
      
    </div>
  </template>

<script>
import underline from '../assets/image/underline.png';
export default {
  data() {
    return {
      underline: underline,
      film: null
    };
  },
  async created() {
    await this.getFilmDetail()
  },
  methods: {
    async getFilmDetail() {
      try {
        const id = this.$route.params.id
        const film = await this.$appAxios.get(`/films/${id}`)
        this.film = await film.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>