import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("@/components/content/Home");
const Share = () => import("@/components/content/Share");
const File = () => import("@/components/content/File");
const Community = () => import("@/components/content/Community");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/share',
    name: 'Share',
    component: Share,
    meta: {
      title: 'share',
    }
  },
  {
    path: '/file',
    name: 'File',
    component: File,
    meta: {
      title: 'file',
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      tile: 'community',
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title;
  next();
});


export default router
