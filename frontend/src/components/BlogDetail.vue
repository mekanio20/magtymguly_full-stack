<template>
  <div class="flex flex-col items-center sm:mt-4 lg:mt-20 mt-28 justify-center relative">
    <img :src="`${$uploadUrl}/${blog?.img}`" alt="news" class="rounded-md md:max-w-md max-w-60 sm:mb-10 mb-6">
    <p class="sm:text-3xl text-[24px] font-semibold italic text-center text-primary font-crimson sm:m-5 m-2">{{ blog?.titleTm }}</p>
    <img :src="nagys" alt="hero" class="w-full sm:m-10 m-4">
    <p class="sm:text-2xl text-xl text-start sm:text-center text-primary font-medium font-playfair sm:mt-12 mt-6 relative z-1 feather-background">
      {{ blog?.descTm }}
    </p>
    <img :src="nagys" alt="img" class="w-full sm:mt-16 mt-10">
  </div>
</template>

<script>
import nagys from '../assets/image/nagys.png';
export default {
  data() {
    return {
      nagys: nagys,
      blog: null
    };
  },
  async created() {
    await this.getBlogDetail()
  },
  methods: {
    async getBlogDetail() {
      try {
        const id = this.$route.params.id
        const blog = await this.$appAxios.get(`/conferences/${id}`)
        this.blog = await blog.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
