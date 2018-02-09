// var App = {
//   section_header : 'Main'
// }

// const oopPage = { template: '#camera' }
// const ppPage = { template: '#pp' }
// const spPage = { template: '#sp' }
// const mainPage = { template: '<h1>Hello</h1>'}
// const routes = [
//   { path: '/oop', component: oopPage },
//   { path: '/pp', component: ppPage },
//   { path: '/sp', component: spPage },
//   { path: '/', component: mainPage}
// ];
// const router = new VueRouter({
//   routes
// })

Vue.component('camera', {
  props: ['data'],
  template: '#camera',
});
var app = new Vue({
  el: '#app',
  router : router,
  data(){
    return {
      street: '',
      camers: [
        {
          id: 1,
          image: '32',
          name: 'Camera 1',
          street: 'Бориспіль,  Київський шлях, 71',
          description: 'Напрямок камери: Пішохідний перехід, кінотеатр Європа',
          private: false,
          arhive: false,
          
        },
        {
          id: 2,
          image: '21',
          name: 'Camera 2',
          street: 'Бориспіль,  Київський шлях, 33',
          description: 'Напрямок камери: Перехрестя вулиць Лютнева та Київський шлях',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '24',
          name: 'Camera 3',
          street: 'Бориспіль,  Київський шлях, 47',
          description: 'Напрямок камери: Перехрестя вулиць Головатого та Київський шлях',
          private: false,
          arhive: false
        },
        {
          id: 4,
          image: '42',
          name: 'Camera 6',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону центру міста)',
          private: false,
          arhive: false
        },
        {
          id: 5,
          image: '43',
          name: 'Camera 7',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону міста Київ)',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '26',
          name: 'Camera 4',
          street: 'Бориспіль,  Київський шлях, 76',
          description: 'Напрямок камери: Перехрестя вулиць Червонармійська та Київський шлях',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '200',
          name: 'Camera 5',
          street: 'Бориспіль, Київський шлях, 39',
          description: 'Напрямок камери: Перехрестя вулиць Горького та Київський шлях',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '39',
          name: 'Camera 8',
          street: 'Бориспіль, Київський шлях, 86',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону міста Харків)',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '41',
          name: 'Camera 9',
          street: 'Бориспіль, Київський шлях, 83',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону центру міста)',
          private: false,
          arhive: false
        },
        {
          id: 3,
          image: '88',
          name: 'Camera 100',
          street: 'Бориспіль, Київський шлях 1/24',
          description: 'Напрямок камери: Перехрестя вулиць Київський шлях та Френкеля',
          private: false,
          arhive: false
        },
      ],
      camersFilter: [],
    }
  },
  methods: {
    filterOfCamers(street){
      console.log('OK=>',this.street);
      this.camersFilter = this.camers.filter(function(camera){
        console.log(camera.street);
        return camera.street.search(new RegExp(street, 'i')) != -1;
      })
      console.log(this.camersFilter);
    }
  },
  created() {
    this.camersFilter = this.camers;
  },
})
