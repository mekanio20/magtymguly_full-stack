<template lang="">
  <div class="">
    <div class="flex flex-col items-center justify-center sm:mt-8 lg:mt-20 mt-36">
      <div class="font-semibold xl:text-5xl text-[36px] text-center font-crimson italic relative my-[-25px]">
        Öwreniji alymlar
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>
    <div>    
      <div class="relative overflow-hidden">
        <div class="feather-background">
            <div class="sm:mt-24 mt-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-x-24 gap-x-8 sm:gap-y-24 gap-y-8 relative z-1">
              <WriterCard v-for="writer in writers" :key="writer.id" :imgURL="`${$uploadUrl}/${writer.img}`" :name="writer.name" :url="`/writerdetail/${writer.id}`" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-end justify-end sm:mt-12 mt-8">
      <span class="text-xs">
        Showing <span class="font-semibold ">1</span> to <span class="font-semibold ">10</span> of <span class="font-semibold ">100</span> Entries
      </span>
      <!-- Buttons -->
      <div class="inline-flex mt-2 xs:mt-0">
        <button class="flex items-center justify-center sm:px-8 px-6 sm:h-12 h-10 sm:text-md text-sm font-playfair font-semibold text-primary bg-[#fcd9c1] rounded-s hover:bg-[#fdc9a4] ">
          Öňki
        </button>
        <button class="flex items-center justify-center sm:px-8 px-6 sm:h-12 h-10 sm:text-md text-sm font-playfair font-semibold text-primary border-0 bg-[#fccfaf] rounded-e hover:bg-[#fdc9a4]">
          Indiki
        </button>
      </div>
    </div>
  </div>
    
</template>

<script>
import underline from '../assets/image/underline.png';
import WriterCard from "./WriterCard.vue";
export default {
  data() {
    return {
      underline: underline,
      writers: null,
    };
  },
  components: {
    WriterCard,
  },
  async created() {
    await this.getLiteratis()
  },
  methods: {
    async getLiteratis() {
      try {
        const writers = await this.$appAxios.get('/literatis')
        this.writers = await writers.data.detail.rows
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
