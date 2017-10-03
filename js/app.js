// var App = {
//   section_header : 'Main'
// }

const NotFound = { template: '<p>Not Found</p>' }
const Home = { template: '<p>Main</p>' }
const About = { template: '<p>About</p>' }
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
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
      {id: 1, path : "#about", name: 'Object-oriented programming' },
      {id: 2, path : "#home", name: 'Structured programming' },
      {id: 3, path : "#about",name: 'Procedural programming' }
    ],
  },
})
