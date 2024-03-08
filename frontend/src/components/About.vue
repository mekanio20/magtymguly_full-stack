<template>
  <div class="flex flex-col items-center justify-center">
    <img :src="hero3" alt="hero" class="sm:max-w-xs max-w-44 sm:mb-10 mb-6 sm:mt-4 lg:mt-20 mt-28">
    <p class="sm:text-5xl text-3xl font-semibold italic text-center text-primary font-crimson sm:m-5 m-4">
      Magtymguly Pyragy
    </p>
    <p class="sm:text-4xl text-[28px] font-semibold italic text-center text-orange font-crimson sm:mb-14 mb-6">1724—1807</p>
    <img :src="nagys" alt="hero" class="w-full">

    <p class="sm:text-2xl text-xl text-start sm:text-center text-primary font-medium font-playfair md:mt-16 mt-6 relative z-1 feather-background">
      Magtymguly başlangyç terbiýäni kakasy Döwletmämmet Azadydan alýar. Ol bu barada: "Ylym öwreden ussat-kyblam pederdir" - diýip ýazýar. Magtymguly ilki oba mekdebinde okaýar. Onuň ilkinji mugallymyna Nyýazsalyh diýer ekenler. Magtymguly örän zehinli we ýiti akylly bolupdyr. Ol dürli kitaplary çakdan- aşa köp we irginsiz okapdyr. Magtymguly ýaş wagty kakasyndan, ejesinden we obanyň garry adamlaryndan köp-köp halk rowaýatlary, goşgy-gazallary, erteki we nakyllary höwes bilen diňleýär eken. Ol kakasy Döwletmämmet Azadynyň döreden eserleriniň köpüsini ýatdan öwrenipdir.
      <br><br>
      Magtymgulynyň zehinliligine, okuwa höwesliligine göz ýetiren Döwletmämmet onuň ylymly adam bolup ýetişmeginiň aladasyny edipdir. XVIII asyrda Etrek, Ahal, Mary sebilerinde güýçli medreseler bolmandyr. Şonuň üçin Döwletmämmet Azady öz oglyny ilki Halajyň Gyzylaýak obasynda ýerlesýän, ol wagt güýcli hasap edilen Idris babanyň medresesine okuwa iberýär. Magtymguly bu medresede birnäçe wagt okaýar. Soňra ol Buhara gidýär,
      <br><br>
      Buharada Gögeldaş atly medresä okuwa gidýär we onda iki ýyl okaýar. Şahyr hem medresede ders berýän şiraly türkmen Nury Kazym ibn Bahr bilen hem tanyşýar we onuň bilen dostlaşýar. Emma medresedäki talyplaryň tertip-düzgüniniň bozuklygy Magtymgulynyň bu medresäni taşlamagyna sebäp bolýar.
      <br><br>
      Magtymguly esasy bilimi Hywadaky «Sirgazy» medresesinde alýar. Ol «Sirgazy» medresesinde 3 ýyl okaýar. Medresede berilýän dersleriň daşynda hem Gündogaryň görnükli şahyrlary: Nyzamynyň, Nesiminiň, Fizulynyň, Nowaýynyň we başgalaryň eserlerini irginsiz okaýar. Ol medresede okaýanlaryň arasynda özuni derrew tanadyp, zehinli talyplaryň hataryna goşulýar. Okuwyň ilkinji ýylynda Magtymguly talyplaryň halypasy bolýar. Soňky ýylda bolsa, mugallym özi ýok wagty ders geçirmegi-de Magtymgula ynanýar ekeni. Magtymguly öz döwrüniň iň bilimli we düşünjeli adamy bolup ýetiş Magtymguly jahankeşde adam bolupdyr. Dünýäniň köp ýerlerine syýahat etmek duýgusy onda ýaşlykda döreýär. Bu syýahatlar şahyryň dünýägaraýşyny giňeldipdir. Magtymguly oglan okatmakdan başga tanymal zergär bolupdyr we kümüşden, altyndan dürli bezeg şaýlaryny ýasapdyr.
      <br><br>
      Magtymgulynyň maşgala ýagdaýy jedelli meseleleriň biri bolup durýar. Goşgularyna esaslanyp, onuň Meňli diýen gyzy söýendigini, ýöne käbir sebäplere görä alyp bilmändigi hakda alymlar netijä gelýärler. Magtymgula Akgyz diýen ýeňňesi dakylýar.
    </p>

    <img :src="nagys" alt="hero" class="w-full mt-14">
  </div>
</template>

<script>
import hero3 from '../assets/image/hero3.png';
import nagys from '../assets/image/nagys.png';
import feather from '../assets/image/feather.png';
import vector from '../assets/icon/vector.svg';
export default {
  data() {
    return {
      hero3: hero3,
      nagys: nagys,
      feather: feather,
      vector: vector,
    };
  },
};
</script>


