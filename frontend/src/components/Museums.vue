<template lang="">
  <div class="">
    <div class="flex flex-col items-center justify-center sm:mt-4 lg:mt-20 mt-28">
      <div class="font-semibold xl:text-5xl text-[36px] font-crimson italic relative my-[-25px]">
        Muzeýler
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>
    <a class="relative overflow-hidden" href='/museumdetail'>
      <div class="feather-background">
        <div class="sm:mt-11 mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-8 relative z-1">
          <MuseumCard v-for="museum in museums" :key="museum.id" :imgURL="`${$uploadUrl}/${museum.img}`" :name="museum.titleTm" :description="museum.descTm" :location="museum.location" :url="`/museumdetail/${museum.id}`" />
        </div>
      </div>
    </a> 

    <!-- pagination -->
    <div class="flex flex-col items-end justify-end mt-12">
      <span class="text-sm">
        Showing <span class="font-semibold ">1</span> to <span class="font-semibold ">10</span> of <span class="font-semibold ">100</span> Entries
      </span>
      <!-- Buttons -->
      <div class="inline-flex mt-2 xs:mt-0">
        <button class="flex items-center justify-center px-8 h-12 text-md font-playfair font-semibold text-primary bg-[#fcd9c1] rounded-s hover:bg-[#fdc9a4] ">
          Öňki
      </button>
      <button class="flex items-center justify-center px-8 h-12 text-md font-playfair font-semibold text-primary border-0 bg-[#fccfaf] rounded-e hover:bg-[#fdc9a4]">
        Indiki
      </button>
    </div>
  </div>
  </div>
    
</template>

<script>
  import underline from '../assets/image/underline.png';
  import MuseumCard from "./MuseumCard.vue";
  export default {
    data() {
      return {
        underline: underline,
        museums: null,
      };
    },
    components: {
        MuseumCard,
    },
    async created() {
      await this.getMuseums()
    },
    methods: {
      async getMuseums() {
        try {
          const museums = await this.$appAxios.get('/museums')
          this.museums = await museums.data.detail.rows
        } catch (error) {
          console.log(error)
        }
      }
    }
  };
</script>






