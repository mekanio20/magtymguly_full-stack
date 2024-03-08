<template>
  <div class="flex flex-col items-center sm:mt-4 lg:mt-20 mt-28 justify-center relative">
    <img :src="`${$uploadUrl}/${museum?.img}`" alt="museum" class="rounded-md md:max-w-sm max-w-60 sm:mb-10 mb-4">
    <p class="sm:text-4xl text-[36px] font-semibold italic text-center text-primary font-crimson m-3">{{ museum?.titleTm }}</p>
    <p class="sm:text-2xl text-xl font-semibold italic text-center text-orange font-crimson sm:mb-14 mb-6 mt-2">{{ museum?.locationTm }}</p>
    <img :src="nagys" class="w-full md:m-8 m-4">

    <p class="sm:text-2xl text-xl text-start sm:text-center text-primary font-medium font-playfair md:mt-10 mt-6 relative z-1 feather-background">
      {{  museum?.descTm }}
    </p>

    <div class="sm:mt-20 mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 relative z-1 rounded-3">
        <img v-for="item in museum?.musmuseum_images" :src="`${$uploadUrl}/${item.img}`" alt="img" class="w-full h-56 rounded-sm">
    </div>

    <img :src="nagys" class="w-full md:mt-16 mt-10">
  </div>
</template>

<script>
import nagys from '../assets/image/nagys.png';
export default {
  data() {
    return {
      nagys: nagys,
      museum: null,
    };
  },
  async created() {
    await this.getMuseumDetail()
  },
  methods: {
    async getMuseumDetail() {
      try {
        const id = this.$route.params.id
        const museum = await this.$appAxios.get(`/museums/${id}`)
        this.museum = await museum.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
