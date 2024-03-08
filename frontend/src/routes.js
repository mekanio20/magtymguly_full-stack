import { createRouter, createWebHistory } from "vue-router"
import Index from './components/Index.vue';
import PoemDetail from './components/PoemDetail.vue'
import BookDetail from './components/BookDetail.vue'
import AllBooks from './components/AllBooks.vue'
import AllPoems from './components/AllPoems.vue'
import About from './components/About.vue'
import Writers from './components/Writers.vue'
import WriterDetail from './components/WriterDetail.vue'
import Museums from './components/Museums.vue'
import MuseumDetail from './components/MuseumDetail.vue'
import Statues from './components/Statues.vue'
import Blog from './components/Blog.vue'
import BlogDetail from './components/BlogDetail.vue'
import Film from './components/Film.vue'
import FilmDetail from './components/FilmDetail.vue'
import Admin from './components/Admin.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index,
    },
    {
        path: '/poemdetail/:id',
        name: 'poemdetail',
        component: PoemDetail,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/bookdetail/:id',
        name: 'bookdetail',
        component: BookDetail,
    },
    {
        path: '/allbooks',
        name: 'allbooks',
        component: AllBooks,
    },
    {
        path: '/allpoems/:id',
        name: 'allpoems',
        component: AllPoems,
    },
    {
        path: '/writers',
        name: 'writers',
        component: Writers,
    },
    {
        path: '/writerdetail/:id',
        name: 'writerdetail',
        component: WriterDetail,
    },
    {
        path: '/museums',
        name: 'museums',
        component: Museums,
    },
    {
        path: '/museumdetail/:id',
        name: 'museumdetail',
        component: MuseumDetail,
    },
    {
        path: '/statues',
        name: 'statues',
        component: Statues,
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/blogdetail/:id',
        name: 'blogdetail',
        component: BlogDetail,
    },
    {
        path: '/film',
        name: 'film',
        component: Film,
    },
    {
        path: '/filmdetail/:id',
        name: 'filmdetail',
        component: FilmDetail,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;