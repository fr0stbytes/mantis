import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Contact from '@/components/contact'
import Home from '@/components/home'
import TechHouse from '@/components/thouse'
import StavlasArt from '@/components/stavlasart'
import WorldFrequencies from '@/components/world-frequencies'
import TheBox from '@/components/thebox'
import Barola from '@/components/barola'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/tech-house',
      name: 'TechHouse',
      component: TechHouse
    },
    {
      path: '/stavlas-art',
      name: 'StavlasArt',
      component: StavlasArt
    },
    {
      path: '/world-frequencies',
      name: 'WorldFrequencies',
      component: WorldFrequencies
    },
    {
      path: '/thebox-athens',
      name: 'TheBox',
      component: TheBox
    },
    {
      path: '/barola',
      name: 'Barola',
      component: Barola
    }
  ]
})
