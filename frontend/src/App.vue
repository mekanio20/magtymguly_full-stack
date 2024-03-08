<template>
  <header>
    <Nav /> 
  </header>
  <main class="container max-md:px-3.75">
    <router-view></router-view>
  </main>
  <footer class="">
      <Footer />
  </footer>
</template>


<script>
import Index from "./components/Index.vue";
import Footer from "./components/Footer.vue";
import Nav from './components/Nav.vue';
import PoemDetail from './components/PoemDetail.vue';
import BookDetail from './components/BookDetail.vue';
import AllBooks from './components/AllBooks.vue';
import AllPoems from './components/AllPoems.vue';
import About from './components/About.vue';
import Writers from './components/Writers.vue';
import WriterDetail from './components/WriterDetail.vue';
import Museums from './components/Museums.vue';
import MuseumDetail from './components/MuseumDetail.vue';
import Statues from './components/Statues.vue';
import Blog from './components/Blog.vue';
import BlogDetail from './components/BlogDetail.vue';
import Film from './components/Film.vue';
import FilmDetail from './components/FilmDetail.vue';

export default {
  components: {
    Nav,
    Index,
    Footer,
    PoemDetail,
    BookDetail,
    AllBooks,
    AllPoems,
    About,
    Writers,
    WriterDetail,
    MuseumDetail,
    Museums,
    Statues,
    Blog,
    BlogDetail,
    Film,
    FilmDetail,
  },
};
</script>


