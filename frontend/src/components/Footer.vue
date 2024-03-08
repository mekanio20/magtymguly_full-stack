<template lang="">
    <footer class="bg-[#FFF2E9] sm:mt-32 mt-16 p-0 m-0">
        <div class="mx-auto container max-md:px-3.75 pt-6 lg:pt-14 mb-0">
            <div class="xl:flex xl:justify-around">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="flex flex-col items-center">
                        <img :src="logo2" class="me-3 sm:w-36 w-28" alt="logo" />
                        <p class="mt-8 sm:text-xl text-lg self-center whitespace-wrap font-semibold text-center text-primary font-playfair">Pähim-paýhas ummany Magtymguly Pyragy</p>
                        <img :src="underline" alt="underline" width="206" height="19" class="">
                    </a>
                </div>
          <div class="grid grid-cols-1 gap-2 sm:gap-1 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 sm:text-2xl text-lg font-bold text-left text-orange font-playfair">Ähli bölümler</h2>
                  <ul class="sm:text-xl text-md font-medium text-primary font-playfair">
                      <li class="mb-4">
                        <router-link :to="{ name: 'about' }">
                            <p class="text-primary hover:underline">Ömri we döredijiligi</p>
                        </router-link>
                      </li>
                      <li class="mb-4">
                        <a>
                            <p class="text-primary hover:underline">Şygyrlary</p>
                        </a>
                      </li>
                      <li class="mb-4">
                        <router-link :to="{ name: 'writers' }">
                            <p class="text-primary hover:underline">Öwrenilişi</p>
                        </router-link>
                      </li>
                      <li class="mb-4">
                        <router-link :to="{ name: 'allbooks' }">
                            <p class="text-primary hover:underline">Ýygyndylar</p>
                        </router-link>
                      </li>
                      <li class="mb-4">
                        <router-link :to="{ name: 'blog' }">
                            <p class="text-primary hover:underline">Çäreler</p>
                        </router-link>
                      </li>
                  </ul>
              </div>

              <div class=""></div>

              <div>
                <h2 class="mb-6 sm:text-2xl text-lg font-bold text-left text-orange font-playfair">Habarlaşmak</h2>
                  <ul class="sm:text-xl text-md font-medium text-primary font-playfair">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Tel: (+993 12) 61 61 61</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Fax: (+993 12) 61 61 61</a>
                      </li>
                  </ul>
              </div>

          </div>
      </div>

      <hr class="mt-6 border-orange sm:mx-auto lg:my-6" />

      <div class="sm:flex sm:items-center sm:justify-center mt-6 sm:mt-2 pb-4 inline-flex">
        <span><div class="text-primary font-playfair font-medium sm:text-xl text-sm sm:text-center text-left">© 2024 <a href="/" class="hover:underline">TDBGI.</a> Ähli hukuklar goralan
          </div>
        </span>
        <img :src="emblema" alt="underline" class="w-14 px-3">
      </div>
      
    </div>
</footer>
</template>

<script>
import logo2 from '../assets/image/logo2.png';
import underline from '../assets/image/underline.png';
import emblema from '../assets/image/emblema.png';

export default {
  data() {
    return {
      logo2: logo2,
      underline: underline,
      emblema: emblema,
    };
  }
};
</script>
