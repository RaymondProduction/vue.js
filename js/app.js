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
      camersPublic: [],
      camersPrivate: [],
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
        _this.camersPublic = refactoring(camers);
        console.log('Get list of public camers from server ', _this.camersPublic);
    }, "json" );
    $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=public", function(camers) {
      _this.camersPrivate = refactoring(camers);
      console.log('Get list of privat camers from privateserver ', _this.camersPrivate);
  }, "json" );
  },
})
