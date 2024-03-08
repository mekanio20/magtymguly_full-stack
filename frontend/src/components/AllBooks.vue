<template lang="">
  <div class="relative">
    <div class="flex flex-col items-center justify-center sm:mt-8 lg:mt-20 mt-36">
      <div class="font-semibold xl:text-5xl text-[36px] font-crimson italic relative my-[-25px]">
        Ýygyndylar
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>
    
    <div>
      <div class="relative overflow-hidden">
        <div class="feather-background">
          <div class="sm:mt-11 mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-8 relative z-1">
            <BookCard v-for="book in books" :key="book.id" :imgURL="`${$uploadUrl}/${book.img}`" :name="book.titleTm" :small="book.awtor" :description="book.descTm" :url="`/bookdetail/${book.id}`" />
          </div>
        </div>
      </div>
    </div>
     
     <!-- Pagination -->
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
import BookCard from "./BookCard.vue";
export default {
  data() {
    return {
      underline: underline,
      books: null,
    };
  },
  components: {
    BookCard,
  },
  async created() {
    await this.getAllbooks()
  },
  methods: {
    async getAllbooks() {
      try {
        const books = await this.$appAxios.get('/books')
        this.books = await books.data.detail.rows
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
