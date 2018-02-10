
Vue.component('camera', {
  props: ['camera','validation'],
  template: '#camera',
});
var app = new Vue({
  el: '#app',
  data(){
    return {
      street: '',
      validation: false,
      select: [],
      camers: [],
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
