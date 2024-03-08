<template>
  <a :href="url" class="p-6 w-full flex flex-col rounded-xl gradient-c shadow">
    <div class="font-playfair">
      <video :src="imgURL" :alt="name" class="h-44 rounded-md w-full"></video>
      <div class="sm:text-xl text-lg font-bold text-left text-primary pt-3 line-clamp">
        {{ name }}
      </div>
      <p class="sm:text-md text-base text-left text-primary font-medium line-clamp-2 pb-2 mt-5"><b>Režissýor: </b> {{
        small }}</p>
      <p class="sm:text-md text-base flex text-left text-primary mt-2 font-medium "><b>Dowamlylygy: </b>
        <span>
          <img :src="time" class="h-full w-full pl-2 pr-2">
        </span>
        {{ description }}
      </p>
    </div>
  </a>
</template>


<script>
import time from '../assets/icon/time.svg';

export default {
  props: {
    imgURL: String,
    name: String,
    url: String,
    small: String,
    description: String
  },
  data() {
    return {
      time: time,
    };
  },
}
</script>
