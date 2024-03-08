<template>
  <a :href="url" class="sm:p-6 p-4 w-full flex flex-col rounded-xl gradient-c shadow">
    <div class="font-playfair sm:relative flex items-center flex-row justify-between sm:justify-center sm:flex-col">
      <div class="flex justify-center items-center">
        <img :src="imgURL" :alt="name" class="sm:absolute sm:-top-10 sm:h-44 h-36 w-32 sm:rounded-lg rounded-md" />
      </div>
      <div
        class="sm:text-2xl text-xl sm:pt-36 sm:pb-4 pb-0 sm:px-0 px-6 font-bold text-primary text-center mt-4 line-clamp-2 flex justify-center items-center">
        {{ name }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imgURL: String,
    name: String,
    url: String
  }
}
</script>