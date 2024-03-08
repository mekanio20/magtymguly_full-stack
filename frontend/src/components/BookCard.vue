<template>
    <a :href="url" class="p-6 w-full flex flex-col rounded-xl gradient-c shadow">
        <div class="font-playfair">
          <img :src="imgURL" :alt="name" class="h-44 rounded-md w-full object-cover" />
            <div class="sm:text-xl text-lg font-bold text-left text-primary pt-4 line-clamp">
                {{ name }}
            </div>
            <p class="text-sm italic text-left text-orange pt-3 sm:pb-4 pb-3 line-clamp-1">{{ small }}</p>
            <p class="sm:text-base text-sm text-left text-primary font-medium line-clamp-3">{{ description }}</p>
        </div>
      </a>
</template>
  
<script>
  export default {
    props: {
      imgURL: String,
      url: String,
      name: String,
      small: String,
      description: String
    }
  }
</script>

<style>
  .line-clamp {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
</style>
  
