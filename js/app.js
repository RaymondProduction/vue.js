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
      select: [],
      camers: [],/* [
        {
            "_cam_status":"1",
                      "_fixedconnect":"",
                        "_adr_router":"",
                         "_cam_7_day":"0",
                       "_adr_paradne":"",
                   "_adr_dop_telefon":"",
                         "_adr_email":"",
                        "_cam_31_day":"0",
                           "_id_firm":"",
                        "_cam_14_day":"1",
                             "dvr_no": {			
                "1":"1 День",      
                "31":"Месяц",
                "14":"2 Недели",
                "7":"1 Неделя"
                },
               "id":6848,
               "_adr_telefon":"",
                  "uid":6872, 
                 "_oneconnect":"",
                 "_adr_router_name":"",
                 "_block_capremind":"",
                 "_adr_group":"",
                  "_adr_city":"Бориспіль",
                 "_id_identifi_kod":"",
                  "_adr_room":"",
                "_id_passport_date":"",
                    "dvr_yes": {	
                    "14":"2 недели"
                   },
                  "_cam_type":"",
                 "_cam_1_day":"0",
               "_id_passport_place":""
                ,"_adr_house":"2"
                ,"_adr_floor":"",
                 "_cam_scrin":"http://test.my.monolith.net.ua/files/6872_1510920989_5550902856.jpg"
              ,"_id_passport":"",
                "_adr_street":"Київський шлях",
                    "comment":"камера знаходится там то там то", 
                 "_adr_router_nash":"",
                 "_adr_place":"",
        }
      ,
      
        {

          "_adr_street":"Київський шлях",
      
        },*/
       /* {
          id: 2,
          image: '21',
          name: 'Camera 2',
          street: 'Бориспіль,  Київський шлях, 33',
          description: 'Напрямок камери: Перехрестя вулиць Лютнева та Київський шлях',
          private: false,
          period: null,
          archive: '',
          maxPeriod:  {id : 9,  days: 10},  
        },
        {
          id: 3,
          image: '24',
          name: 'Camera 3',
          street: 'Бориспіль,  Київський шлях, 47',
          description: 'Напрямок камери: Перехрестя вулиць Головатого та Київський шлях',
          private: false,
          maxPeriod:  {id : 9,  days: 5},  
          period: null,
          archive: '',
        },
        {
          id: 4,
          image: '42',
          name: 'Camera 6',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону центру міста)',
          private: false,
          maxPeriod:  {id : 9,  days: 20},  
          period: null,
          archive: '',
        },
        {
          id: 5,
          image: '43',
          name: 'Camera 7',
          street: 'Бориспіль,  Київський шлях, 3',
          description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону міста Київ)',
          private: false,
          maxPeriod:  null,  
          period: null,
          archive: '',
        },
        {
          id: 6,
          image: '26',
          name: 'Camera 4',
          street: 'Бориспіль,  Київський шлях, 76',
          description: 'Напрямок камери: Перехрестя вулиць Червонармійська та Київський шлях',
          private: false,
          maxPeriod:  {id : 9,  days: 62},  
          period: null,
          archive: '',
        },
        {
          id: 7,
          image: '200',
          name: 'Camera 5',
          street: 'Бориспіль, Київський шлях, 39',
          description: 'Напрямок камери: Перехрестя вулиць Горького та Київський шлях',
          private: false,
          maxPeriod:  {id : 9,  days: 28},  
          period: null,
          archive: '',
        },
        {
          id: 8,
          image: '39',
          name: 'Camera 8',
          street: 'Бориспіль, Київський шлях, 86',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону міста Харків)',
          private: false,
          maxPeriod: null,  
          period: null,
          archive: '',
        },
        {
          id: 9,
          image: '41',
          name: 'Camera 9',
          street: 'Бориспіль, Київський шлях, 83',
          description: 'Напрямок камери: Перехрестя вулиць Дзержинського та Київський шлях (в сторону центру міста)',
          private: false,
          maxPeriod:  {id : 9,  days: 31},  
          period: null,
          archive: '',
        },
        {
          id: 10,
          image: '88',
          name: 'Camera 100',
          street: 'Бориспіль, Київський шлях 1/24',
          description: 'Напрямок камери: Перехрестя вулиць Київський шлях та Френкеля',
          private: false,
          maxPeriod: null,  
          period: null,
          archive: '',
        },
      ],*/
    }
  },
  methods: {
    filter(camera, street){
      console.log(this.validation);
      console.log(this.camers)
      if (this.validation){
        return camera.archive !== '';
      } else {
        return (
            camera._adr_street + ' '
           + camera.comment + ' '
           + camera._adr_city +' '
           + camera.uid
        ).search(new RegExp(street, 'i')) != -1;
      }
    },
    validationAndGet(){
      var _this = this;
      console.log('Validation and get!');
      this.street='';
      this.validation=true;
      var problem = this.camers.filter(function(camera){
        return camera.archive === "YES" && camera.period === null;
      })
      var select = this.camers.filter(function(camera){
        return camera.archive!='';
      })
      console.log('problem:',problem,' select: ',select);
      if (problem.length == 0 && select.length >0) {
        $.post( "http://localhost:8080/", {
          camers: select
        },'json');
      } else {
        console.log('Validation problem')
      }
    }
  },
  created() {
    var _this = this;
    $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=public", function(camers) {
      //_this.camers = [1,2,3];
      console.log('Get list of camers from server ', _this.camers);
      _this.camers = camers;
    }, "json" );
  },
})
