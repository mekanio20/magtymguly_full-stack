<template>
    <a :href="url" class="p-6 w-full flex flex-col rounded-xl gradient-c shadow">
      <div class="font-playfair">
        <img :src="imgURL" :alt="name" class="object-cover h-44 rounded-md w-full" />
        <div class="sm:text-xl text-lg font-bold text-left text-primary pt-4 line-clamp">
          {{ name }}
        </div>
        <!-- Use v-html directive to interpret HTML tags -->
        <p class="sm:text-base text-sm text-left text-primary sm:mt-5 mt-4 font-medium line-clamp-4" ></p>
      </div>
    </a>
</template>

<script>
  export default {
    props: {
      imgURL: String,
      name: String,
      description: String,
      url: String
    },
    computed: {
      // Convert newline characters to <br> tags
      formattedDescription() {
        return this.description.replace(/\n/g, '<br>');
      }
    }
  }
</script>

  