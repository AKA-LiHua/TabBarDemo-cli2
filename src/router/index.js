import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home/Home'
import Category from '../views/category/Category'
import ShopCart from '../views/shopcart/ShopCart'
import Profile from '../views/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
