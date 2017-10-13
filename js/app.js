// var App = {
//   section_header : 'Main'
// }

const oopPage = { template: '#oop' }
const ppPage = { template: '#pp' }
const spPage = { template: '#sp' }
const mainPage = { template: '<h1>Hello</h1>'}
const routes = [
  { path: '/oop', component: oopPage, props: { position: 1} },
  { path: '/pp', component: ppPage, props: { position: 2} },
  { path: '/sp', component: spPage, props:  () => { /*this.menu.position=3 */} },
  { path: '/', component: mainPage, props: () => { console.log('YES');}}
];
const router = new VueRouter({
  routes
})

Vue.component('section-header', {
  props: ['name'],
  template: '<p>{{name}}</p>',
});
Vue.component('menu-main',{
  props: ['menu','position'],
  template: '<table class="table-menu"><tr>'+
            '  <td class="td" v-for="item in menu.list"  v-if="menu.position != item.path" v-bind:width = "item.width"> <router-link v-bind:to="item.path"> {{item.name}} </router-link></td>'+
          //  '  <td class="td" style="background: #97D435;" v-for="item in menu.list"  v-if="menu.position == item.path" v-bind:width = "item.width"><a  class="a" v-bind:href="item.path"> {{item.name}} </a></td>'+
            '</tr></table>',
});
var app = new Vue({
  el: '#app',
  router : router,
  data: {
    message: 'Hello Vue.js!',
    menu: {
      position : 1,
      list: [
          {id: 1, path : "#oop", width: 120, name: 'Про мене' },
          {id: 2, path : "#sp",  width: 130, name: 'Файли' },
          {id: 3, path : "#pp",  width: 90,  name: 'Відео' },
          {id: 4, path : "#pp",  width: 140, name: 'Фотогалерея' },
          {id: 5, path : "#pp",  width: 200, name: 'Зворотній зв\'язок' },
          {id: 6, path : "#pp",  width: 120, name: 'Різне' },
      ],
    },
  },
  methods: {
    reload2: function(){
       console.log('OK');
    },
    menuPos: function () {
      this.menu.position=0;
    }
  },
    watch: {
    '$route': function (id) {
      this.menu.position = id.path.replace('/','#');
      location.reload();
    }
  },
})
