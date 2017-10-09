// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import './common/stylus/index.styl';

// 将 components 取别名
import goods from 'components/goods/goods';
// import ratings from 'components/ratings/ratings';
// import seller from 'components/seller/seller';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

// const goods = { template: '<div>goods</div>' };
// const ratings = { template: '<div>ratings</div>' };
// const seller = { template: '<div>seller</div>' };

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
// }, {
//   path: '/ratings',
//   component: ratings
// }, {
//   path: '/seller',
//   component: seller
}];

const router = new VueRouter({
  linkActiveClass: 'active', // 选中路由添加属性active
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
