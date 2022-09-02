import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import Hahow from '@/views/Hahow'
import Tools from '@/views/Tools'
import Projects from '@/views/Projects'
import Others from '@/views/Others'
import description from '@/assets/data/description.json'

// 要 props 入各路由的文本資料在這裡解構並且指派
const { hahow, tools, projects, others } = description

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'Hahow',
      component: Landing,
    },
    {
      path: '/hahow',
      name: 'Hahow',
      props: { hahow },
      component: Hahow
    },
    {
      path: '/tools',
      name: 'Tools',
      props: { tools },
      component: Tools
    },
    {
      path: '/projects',
      name: 'Projects',
      props: { projects },
      component: Projects
    },
    {
      path: '/others',
      name: 'Others',
      props: { others },
      component: Others
    }
  ]
})
