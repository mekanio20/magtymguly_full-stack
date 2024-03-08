<template>
    <a :href="url" class="p-6 w-full flex flex-col rounded-xl gradient-c shadow">
      <div class="font-playfair">
        <img :src="imgURL" :alt="name" class="h-44 rounded-md w-full" />
        <div class="sm:text-xl text-md font-bold text-left text-primary pt-3 line-clamp">
          {{ name }}
        </div>
        <p class="text-orange mt-4 mb-2 text-sm">Ýerleşýän ýeri: {{ location }}</p>
        <p class="text-sm text-left text-primary font-medium line-clamp-2"> 
         {{ description }}
        </p>
      </div>
    </a>
</template>
  
<script>
  export default {
    props: {
      imgURL: String,
      name: String,
      location: String,
      url: String,
      description: String
    },
  }
</script>
  