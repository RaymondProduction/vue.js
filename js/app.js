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
  props: ['camera','validation'],
  template: '#camera',
});
var app = new Vue({
  el: '#app',
  //router : router,
  data(){
    return {
      street: '',
      validation: false,
      camers: [
        {
          id: 1,
          image: '32',
          name: 'Camera 1',
          street: 'Бориспіль,  Київський шлях, 71',
          description: 'Напрямок камери: Пішохідний перехід, кінотеатр Європа',
          private: false,
          period: null,
          archive: null,          
        },
        {
          id: 2,
          image: '21',
          name: 'Camera 2',
          street: 'Бориспіль,  Київський шлях, 33',
          description: 'Напрямок камери: Перехрестя вулиць Лютнева та Київський шлях',
          private: false,
          period: null,
          archive: null,
        },
        {
          id: 3,
          image: '24',
          name: 'Camera 3',
          street: 'Бориспіль,  Київський шлях, 47',
          description: 'Напрямок камери: Перехрестя вулиць Головатого та Київський шлях',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 4,
          image: '42',
          name: 'Camera 6',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону центру міста)',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 5,
          image: '43',
          name: 'Camera 7',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону міста Київ)',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 6,
          image: '26',
          name: 'Camera 4',
          street: 'Бориспіль,  Київський шлях, 76',
          description: 'Напрямок камери: Перехрестя вулиць Червонармійська та Київський шлях',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 7,
          image: '200',
          name: 'Camera 5',
          street: 'Бориспіль, Київський шлях, 39',
          description: 'Напрямок камери: Перехрестя вулиць Горького та Київський шлях',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 8,
          image: '39',
          name: 'Camera 8',
          street: 'Бориспіль, Київський шлях, 86',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону міста Харків)',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 9,
          image: '41',
          name: 'Camera 9',
          street: 'Бориспіль, Київський шлях, 83',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону центру міста)',
          private: false,
         
          period: null,
          archive: null,
        },
        {
          id: 10,
          image: '88',
          name: 'Camera 100',
          street: 'Бориспіль, Київський шлях 1/24',
          description: 'Напрямок камери: Перехрестя вулиць Київський шлях та Френкеля',
          private: false,
         
          period: null,
          archive: null,
        },
      ],
      camersFilter: [],
    }
  },
  methods: {
    filterOfCamers(street){
      console.log('Run filters');
      this.camersFilter = this.camers.filter(function(camera){
        return camera.street.search(new RegExp(street, 'i')) != -1;
      })
      console.log(this.camersFilter);
    },
    validationAndGet(){
      console.log('Validation and get!');
      this.validation=true;
      var problem = this.camersFilter.filter(function(camera){
        return camera.period === null || camera.archive === null;
      })
      if (problem == 0) {
        console.log(this.camersFilter);
        $.post( "http://localhost:8080/", {
          camers: this.camersFilter
        }, function(response){
          console.log('Respone:',response)
        },'json');
      } else {
        console.log('Validation problem')
      }
    }
  },
  created() {
    this.camersFilter = this.camers;
  },
})
