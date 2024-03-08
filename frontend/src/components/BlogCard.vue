<template>
  <a :href="url" class="p-6 w-full flex flex-col rounded-xl gradient-c shadow">
    <div class="font-playfair">
      <img :src="imgURL" :alt="name" class="h-44 rounded-md w-full" />
      <div class="sm:text-xl text-md font-bold text-left text-primary pt-4 line-clamp-4">
        {{ name }}
      </div>
      <p class="text-sm italic text-left text-orange sm:pt-3 pt-2 pb-2">{{ small }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imgURL: String,
    name: String,
    small: String,
    url: String
  }
}
</script>
