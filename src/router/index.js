import Vue from 'vue'
import Router from 'vue-router'
import Hahow from '@/views/Hahow'
import Tools from '@/views/Tools'
import Projects from '@/views/Projects'
import description from '@/assets/data/description.json'

const { hahow, tools, projects } = description

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
