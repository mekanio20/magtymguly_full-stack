<template>
  <div class="sm:mt-8 lg:mt-20 mt-32 flex flex-col items-center justify-center relative">
    <img :src="`${$uploadUrl}/${writer?.img}`" alt="writer" class="sm:max-w-60 max-w-36 mb-6 rounded-lg lg:max-h-80">
    <p class="sm:text-5xl text-3xl font-semibold italic text-center text-primary font-crimson sm:mt-12 mt-4 mb-4">{{ writer?.name }}</p>
    <p class="sm:text-4xl text-[28px] font-semibold italic text-center text-orange font-crimson sm:mb-14 mb-6">{{ writer?.year }}</p>
    <img :src="nagys" alt="hero" class="w-full sm:m-10 m-4">

    <div class="relative overflow-hidden">
      <p class="sm:text-2xl text-xl text-start sm:text-center text-primary font-medium font-playfair md:mt-16 mt-6 relative z-1 feather-background">
        {{ writer?.descTm }}
      </p>
    </div>
    <img :src="nagys" alt="hero" class="w-full sm:mt-14 mt-6">
  </div>
</template>

<script>
import hero from '../assets/image/hero.png';
import nagys from '../assets/image/nagys.png';
import feather from '../assets/image/feather.png';
import vector from '../assets/icon/vector.svg';
import writerr from '../assets/image/writerr.png';
export default {
  data() {
    return {
      hero: hero,
      nagys: nagys,
      feather: feather,
      vector: vector,
      writer: null,
    };
  },
  async created() {
    await this.getWriterDetail()
  },
  methods: {
    async getWriterDetail() {
      try {
        const id = this.$route.params.id
        const writer = await this.$appAxios.get(`/literatis/${id}`)
        this.writer = await writer.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
