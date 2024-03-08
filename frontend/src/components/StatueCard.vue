<template>
    <div class="p-6 w-full flex flex-col rounded-xl gradient-c shadow relative">
      <div class="font-playfair relative">
        <img :src="imgURL" :alt="name" class="absolute sm:-top-16 -top-12 w-full rounded-md  mx-auto h-48 aspect-square"/>
        <div class="sm:text-xl text-lg sm:mt-36 mt-40 font-bold text-left text-primary line-clamp">
          {{ name }}
        </div>
        <p class="sm:text-base text-sm flex text-left text-primary mt-4 font-medium pb-2">
        
        <img :src="icon" :alt="icon" class="w-9 h-full" >
        <span class="line-clamp-4">{{ description }}</span>
        </p>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      imgURL: String,
      icon: String,
      name: String,
      description: String
    },
  }
</script>
  