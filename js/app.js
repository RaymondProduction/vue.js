Vue.component('camera', {
  props: {
    validation : Boolean,
    camera: {
      type: Object,
      default: function () {
        return { archive: 'привет!' }
      }
    }
  },
  template: '#camera',
});
var app = new Vue({
  el: '#app',
  data(){
    return {
      street: '',
      validation: false,
      select: [],
//      camersPublic: '[{"dvr_yes":{"1":"1 день"},"_cam_1_day":"1","_cam_31_day":"0","_cam_status":"1","_id_passport_date":"","comment":"Камера знімає IT відділ","_oneconnect":"","_adr_email":"","_adr_paradne":"","_adr_floor":"","_adr_place":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6839_1510325492_6916233332.jpg","_id_passport":"","_adr_router_name":"","_adr_router":"","_id_passport_place":"","_adr_comments":"","_block_capremind":"","_adr_group":"","_adr_dop_telefon":"","_cam_7_day":"0","uid":6839,"_adr_telefon":"","_adr_house":"71а","_id_identifi_kod":"","_adr_city":"Бориспіль","_adr_room":"305","_cam_type":"0","dvr_no":{"1":"1 день","14":"2 недели","31":"Месяц","7":"1 неделя"},"_adr_router_nash":"","_adr_street":"Київський Шлях","id":6815,"_cam_14_day":"0","_fixedconnect":"","_id_firm":""},{"_cam_type":"","dvr_no":{"1":"1 день","14":"2 недели","31":"Месяц","7":"1 неделя"},"_adr_room":"","_id_identifi_kod":"","_adr_city":"Бориспіль","_fixedconnect":"","_id_firm":"","_adr_street":"Бежівка (Дзержинського)","_adr_router_nash":"","id":6848,"_cam_14_day":"1","_adr_paradne":"","_adr_floor":"","_oneconnect":"","_adr_email":"","_adr_router_name":"","_adr_router":"","_adr_place":"","_id_passport":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6872_1510920989_5550902856.jpg","_cam_1_day":"0","dvr_yes":{"14":"2 недели"},"_cam_31_day":"0","_cam_status":"1","comment":"Камера знімає перехрестя Дзержинського","_id_passport_date":"","_adr_house":"2","_id_passport_place":"","_adr_group":"","_cam_7_day":"0","_adr_dop_telefon":"","uid":6872,"_adr_telefon":"","_adr_comments":"","_block_capremind":""},{"_id_passport_place":"","_adr_comments":"","_block_capremind":"","uid":6873,"_adr_telefon":"","_cam_7_day":"0","_adr_dop_telefon":"","_adr_group":"","_adr_house":"33","_cam_31_day":"0","dvr_yes":{"1":"1 день"},"_cam_1_day":"1","_id_passport_date":"","comment":"Камера знімає палац браку","_cam_status":"1","_adr_email":"","_oneconnect":"","_adr_floor":"","_adr_paradne":"","_id_passport":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6873_1510921091_8741443162.jpg","_adr_place":"","_adr_router":"","_adr_router_name":"","_adr_router_nash":"","_adr_street":"Євгена Коновальця (Пров. Горького)","id":6849,"_cam_14_day":"0","_fixedconnect":"","_id_firm":"","_id_identifi_kod":"","_adr_city":"Бориспіль","_adr_room":"","dvr_no":{"31":"Месяц","7":"1 неделя","1":"1 день","14":"2 недели"},"_cam_type":"0"}]',
//      camersPrivate: '[{"dvr_yes":{"1":"1 день"},"_cam_1_day":"1","_cam_31_day":"0","_cam_status":"1","_id_passport_date":"","comment":"Камера знімає IT відділ","_oneconnect":"","_adr_email":"","_adr_paradne":"","_adr_floor":"","_adr_place":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6839_1510325492_6916233332.jpg","_id_passport":"","_adr_router_name":"","_adr_router":"","_id_passport_place":"","_adr_comments":"","_block_capremind":"","_adr_group":"","_adr_dop_telefon":"","_cam_7_day":"0","uid":6839,"_adr_telefon":"","_adr_house":"71а","_id_identifi_kod":"","_adr_city":"Бориспіль","_adr_room":"305","_cam_type":"0","dvr_no":{"1":"1 день","14":"2 недели","31":"Месяц","7":"1 неделя"},"_adr_router_nash":"","_adr_street":"Київський Шлях","id":6815,"_cam_14_day":"0","_fixedconnect":"","_id_firm":""},{"_cam_type":"","dvr_no":{"1":"1 день","14":"2 недели","31":"Месяц","7":"1 неделя"},"_adr_room":"","_id_identifi_kod":"","_adr_city":"Бориспіль","_fixedconnect":"","_id_firm":"","_adr_street":"Бежівка (Дзержинського)","_adr_router_nash":"","id":6848,"_cam_14_day":"1","_adr_paradne":"","_adr_floor":"","_oneconnect":"","_adr_email":"","_adr_router_name":"","_adr_router":"","_adr_place":"","_id_passport":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6872_1510920989_5550902856.jpg","_cam_1_day":"0","dvr_yes":{"14":"2 недели"},"_cam_31_day":"0","_cam_status":"1","comment":"Камера знімає перехрестя Дзержинського","_id_passport_date":"","_adr_house":"2","_id_passport_place":"","_adr_group":"","_cam_7_day":"0","_adr_dop_telefon":"","uid":6872,"_adr_telefon":"","_adr_comments":"","_block_capremind":""},{"_id_passport_place":"","_adr_comments":"","_block_capremind":"","uid":6873,"_adr_telefon":"","_cam_7_day":"0","_adr_dop_telefon":"","_adr_group":"","_adr_house":"33","_cam_31_day":"0","dvr_yes":{"1":"1 день"},"_cam_1_day":"1","_id_passport_date":"","comment":"Камера знімає палац браку","_cam_status":"1","_adr_email":"","_oneconnect":"","_adr_floor":"","_adr_paradne":"","_id_passport":"","_cam_scrin":"http://test.my.monolith.net.ua/files/6873_1510921091_8741443162.jpg","_adr_place":"","_adr_router":"","_adr_router_name":"","_adr_router_nash":"","_adr_street":"Євгена Коновальця (Пров. Горького)","id":6849,"_cam_14_day":"0","_fixedconnect":"","_id_firm":"","_id_identifi_kod":"","_adr_city":"Бориспіль","_adr_room":"","dvr_no":{"31":"Месяц","7":"1 неделя","1":"1 день","14":"2 недели"},"_cam_type":"0"}]',
    }
  },
  methods: {
    filter(camera, street){
      if (this.validation){
        return camera.a!== '';
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
      var problem = this.camersPublic.concat(this.camersPrivate).filter(function(camera){
        return camera.a === 'YES' && camera.p === 0 && camera.d;
      })
      var select = this.camersPublic.concat(this.camersPrivate).filter(function(camera){
        return camera.a!='';
      })
      console.log('problem:',problem,' select: ',select);
      if (problem.length == 0 && select.length >0) {
        $.post( "http://localhost:8080/", {
          camers: select
        },'json');
      } else {
        console.log('Validation problem')
      }
    },
    parsePeriod(periods){
      var result = [];
      for (var number in periods) {
        result.push({
          number: number,
          name: periods[number]
        })
      }
      return result;
    }
  },
  created() {
    var _this = this;
    function refactoring(camers){
      camers = $.map(camers, function(camera){
        camera.a='';
        camera.p=0;
        camera.dvr_yes = _this.parsePeriod(camera.dvr_yes);
        camera.dvr_no = _this.parsePeriod(camera.dvr_no);
        return camera;
      });
      camers.sort(function(a, b){
        if (a.uid>b.uid) {
          return 1
        } else {
          return -1
        }
      })
      return camers;
    }
     $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=public", function(camers) {
         _this.camersPublic = file:///home/raymond/dev/vuejs/index.html(camers);
         console.log('Get list of public camers from server ', _this.camersPublic);
     }, "json" );
     $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=public", function(camers) {
       _this.camersPrivate = refactoring(camers);
       console.log('Get list of privat camers from privateserver ', _this.camersPrivate);
   }, "json" );
  //this.camersPublic = refactoring(JSON.parse(this.camersPublic));
  //this.camersPrivate = refactoring(JSON.parse(this.camersPrivate));
  },
})
