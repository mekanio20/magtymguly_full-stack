<template>
  <header class="sm:static fixed top-0 left-0 sm:z-0 z-30 w-full">
    <nav class="lg:flex lg:flex-col">
      <div class="flex items-center justify-between sm:py-4 py-3 container max-md:px-3.75 bg-[#FFF8F3]">
        <a href='/' class="flex items-center space-x-4">
          <img :src="logo" alt="Logo" class="sm:w-12 w-10">
          <span class="self-center text-lg sm:text-xl font-semibold whitespace-nowrap font-playfair">Magtymguly
            Pyragy</span>
        </a>
        <div @click="toggleNav" class="flex lg:hidden">
          <button type="button" class="text-orange hover:text-yellow">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <div style="height: 1px ; background: #B4640A; opacity: 50%;"></div>
      <div class="container max-md:px-3.75 lg:py-8 py-6 flex lg:justify-center justify-start items-center"
        :class="{ 'bg-[#FFF3EB] border-b border-[#B4640A] border-opacity-50': showMenu }">
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col font-semibold mt-0 space-y-6 font-playfair space-x-0
          lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 xl:space-x-16 lg:mt-0 sm:text-lg text-md">
          <li v-for="(item, index) in categories" :key="item.id" :id="item.subcategories.length > 0 ? 'menu-products' : ''">
            <div v-if="item.subcategories.length > 0" class="dropdown inline-block relative">
              <a href="#" class="font-semibold inline-flex items-center">
                <span class="mr-1">{{ item.nameTm }}</span>
                <img :src="Expand_down">
              </a>
              <ul id="dropdown-products" class="dropdown-menu absolute text-sm pt-4">
                <li v-for="(elem, x) in item.subcategories">
                  <a :href="index === 1 ? `/allpoems/${elem.id}` : subcategory_routers[x]">
                    <p class="bg-cream border-t border-borderc hover:bg-creamh py-3 px-4 block whitespace-nowrap">{{ elem.nameTm }}</p>
                  </a>
                </li>
              </ul>
            </div>
            <router-link v-else :to="{ name: category_routers[index] }">
              <p class="text-primary hover:underline">{{ item.nameTm }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/image/logo.png';
import flag from '../assets/image/flag.png';
import Expand_down from '../assets/icon/Expand_down.svg';
import { ref } from 'vue';

export default {
  data() {
    return {
      categories: null,
      category_routers: [
        'about',
        'dropdown',
        'writers',
        'allbooks',
        'blog'
      ],
      subcategory_routers: [
        'film',
        'statues',
        'museums'
      ],
      logo: logo,
      flag: flag,
      Expand_down: Expand_down,
    };
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  async created() {
    await this.getCategories()
  },
  methods: {
    async getCategories() {
      try {
        const categories = await this.$appAxios.get('/category')
        this.categories = await categories.data.detail.rows
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>

<style>
#dropdown-products {
  display: none;
}

#menu-products:hover #dropdown-products {
  display: block;
}

#dropdown-products {
  position: absolute;
  z-index: 999;
}
</style>