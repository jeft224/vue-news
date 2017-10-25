import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewsDetail from '@/components/NewsDetail'
import About from '@/components/About'
import Me from '@/components/Me'
import Collection from '@/components/Collection'
import NewsList from '@/components/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'NewsList',
      component:NewsList
    },
    {
      path: '/news',
      name: 'News',
      component: NewsDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    }
  ]
})
