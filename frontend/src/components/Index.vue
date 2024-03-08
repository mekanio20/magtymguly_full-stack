<template>
  <!-- Hero Section -->
  <div class="flex sm:mt-20 mt-36 items-center relative justify-around">
    <img :src="quote" alt="quote" class="absolute -z-10 lg:left-[15%] xl:left-[18%] sm:h-60 h-48">
    <div class="font-semibold sm:text-5xl lg:text-6xl text-3xl font-crimson text-center italic  justify-center">
      “Magtymguly — sözlär <br> tili türkmeniň.”
    </div>
    <div class="hidden lg:block">
      <img :src="hero3" alt="hero" class="sm:w-72 xl:w-96">
    </div>
  </div>

  <!-- Books Section -->
  <div class="sm:mt-36 mt-28">
    <div class="flex flex-col items-center justify-center">
      <div class="font-semibold lg:text-5xl sm:text-4xl text-[36px] font-crimson italic relative my-[-25px]">
        Ýygyndylar
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>

    <div class="flex items-end justify-end py-3">
      <a href='/allbooks' class="font-semibold sm:text-xl text-sm font-playfair text-orange hover:underline">
        Ählisini gör
      </a>
    </div>

    <div>
      <div
        class="sm:mt-10 mt-9 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-8 relative z-1">
        <BookCard v-for="book in books" :key="book.id" :imgURL="`${$uploadUrl}/${book.img}`" :name="book.titleTm"
          :small="book.awtor" :description="book.descTm" :url="`bookdetail/${book.id}`" />
      </div>
    </div>
  </div>

  <!-- Poems Section -->
  <div class="sm:mt-36 mt-28 relative">
    <div class="flex flex-col items-center justify-center">
      <div class="font-semibold lg:text-5xl sm:text-4xl text-[36px] font-crimson italic relative my-[-25px]">
        Goşgular
      </div>
      <img :src="underline" alt="underline" class="w-64">
    </div>

    <div class="relative overflow-hidden">
      <div class="feather-background">
        <div v-for="(item, index) in poems" :key="index" class="relative">
          <div class="flex items-center justify-between sm:mt-16 mt-12 font-playfair">
            <p class="sm:tet-2xl text-md font-bold text-left text-primary">{{ item.nameTm }}</p>
            <a :href="`/allpoems/${item.id}`" class="font-semibold sm:text-xl text-sm text-orange hover:underline">Ählisini gör</a>
          </div>
          <div>
            <div
              class="sm:mt-11 mt-9 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-8 relative z-1">
              <PoemCard v-for="poem in item.poems" :key="poem.id" :imgURL="`${$uploadUrl}/${poem.img}`" :name="poem.titleTm"
                :description="poem.descTm" :url="`/poemdetail/${poem.id}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hero3 from '../assets/image/hero3.png';
import quote from '../assets/image/quote.png';
import underline from '../assets/image/underline.png';
import PoemCard from "./PoemCard.vue";
import BookCard from "./BookCard.vue";

export default {
  data() {
    return {
      hero3: hero3,
      quote: quote,
      underline: underline,
      books: null,
      poems: null
    };
  },
  components: {
    PoemCard,
    BookCard,
  },
  async created() {
    await this.getBooks()
    await this.getPoems()
  },
  methods: {
    async getBooks() {
      try {
        const books = await this.$appAxios.get('/books?limit=4')
        this.books = await books.data.detail.rows
      } catch (error) {
        console.log(error)
      }
    },
    async getPoems() {
      try {
        const poems = await this.$appAxios.get('/poems?limit=4')
        this.poems = await poems.data.detail
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style>
.feather-background {
  position: relative;
}

.feather-background::before {
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
  background-size: 700px 700px;
  background-position: center center;
}

@media (max-width: 640px) {
  .feather-background::before {
    background-size: contain;
  }
}</style>
