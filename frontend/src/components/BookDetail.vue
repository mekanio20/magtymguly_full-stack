<template>
  <div class="flex flex-col items-center sm:mt-4 lg:mt-20 mt-28 justify-center relative">
    <img :src="`${$uploadUrl}/${book?.img}`" alt="book" class="rounded-md md:max-w-sm max-w-60 sm:mb-10 mb-4">
    <p class="sm:text-5xl text-3xl font-semibold italic text-center text-primary font-crimson  m-3">{{ book?.titleTm }}
    </p>
    <img :src="nagys" alt="hero" class="w-full min-w-2xl sm:m-10 m-4">

    <div @click="downloadPdf(`${$uploadUrl}/${book.pdf}`)"
      class="sm:rounded-xl rounded-lg sm:px-20 px-10 sm:py-4 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-yellow text-yellow sm:text-2xl text-xl mt-6">
      <span
        class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <div class="relative font-playfair transition duration-300 group-hover:text-white ease">Ýüklemek</div>
  </div>

    <p
      class="sm:text-2xl text-xl text-start sm:text-center text-primary font-medium font-playfair sm:mt-16 mt-6 relative z-1 feather-background">
      {{ book?.descTm }}
    </p>

    <img :src="nagys" alt="hero" class="w-full sm:mt-16 mt-10">
  </div>
</template>

<script>
import nagys from '../assets/image/nagys.png';
import axios from 'axios';

export default {
  data() {
    return {
      book: null,
      nagys: nagys,
    };
  },
  async created() {
    await this.getBookDetail()
  },
  methods: {
    async getBookDetail() {
      try {
        const id = this.$route.params.id
        const book = await this.$appAxios.get(`/books/${id}`)
        this.book = await book.data.detail
      } catch (error) {
        console.log(error)
      }
    },
    async downloadPdf(pdf) {
      try {
        axios({
          url: pdf,
          method: 'GET',
          responseType: 'blob',
        }).then(response => {
          const filName = pdf.split('/')[4]
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', filName)
          document.body.appendChild(link)
          link.click()
        }).catch(error => {
          console.error('Download error: ', error)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
