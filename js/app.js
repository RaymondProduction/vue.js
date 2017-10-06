// var App = {
//   section_header : 'Main'
// }

const oopPage = { template: '#oop' }
const ppPage = { template: '#pp' }
const spPage = { template: '#sp' }
const mainPage = { template: '<h1>Hello</h1>'}
const routes = [
  { path: '/oop', component: oopPage },
  { path: '/pp', component: ppPage },
  { path: '/sp', component: spPage },
  { path: '/', component: mainPage}
];
const router = new VueRouter({
  routes
})

Vue.component('section-header', {
  props: ['name'],
  template: '<p>{{name}}</p>',
});
Vue.component('menu-item', {
  props: ['menu'],
  template: '<a v-bind:href="menu.path"> {{menu.name}} </a></li>'
});
var app = new Vue({
  el: '#app',
  router : router,
  data: {
    message: 'Hello Vue.js!',
    menu: [
      {id: 1, path : "#oop", name: 'Object-oriented programming' },
      {id: 2, path : "#sp", name: 'Structured programming' },
      {id: 3, path : "#pp",name: 'Procedural programming' }
    ],
  },
})
