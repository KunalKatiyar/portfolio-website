import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProjectsSkills from '../components/ProjectsSkills.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ProjectsSkills',
    name: 'ProjectsSkills',
    component: ProjectsSkills
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
