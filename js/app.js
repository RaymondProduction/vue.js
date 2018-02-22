Vue.component('camera', {
  props: {
    validation : Boolean,
    selected:{
      type: Array
    },
    camera: {
      type: Object,
    },
    warning: {
      type : Object,
      default: function(){
        var i = _.findIndex(this.selected, (cameraSelected)=>cameraSelected.uid == this.camera.uid.toString() );
        if (i>-1) {
          console.log('Time:',this.selected[i].end_services)
          var d = new Date(this.selected[i].end_services*1000);
          var date = d.getDate();
          var month = d.getMonth() + 1;
          var year = d.getFullYear();
          var t = date + "."+ month + "." + year;
          console.log(t);
          return {
            description: this.selected[i].description,
            end_services: t,
            next_service_id: this.selected[i].next_service_id,
            days: this.selected[i].days,
          }
        }
        else return {};
      }
    }
  },
  methods: {
    isUsedCamera(){
      return -1 < _.findIndex(this.selected, (cameraSelected)=>cameraSelected.uid == this.camera.uid.toString() );
    },
    isWarning(){
      if (this.isUsedCamera()) {
        return {color: 'red'};
      } else {
        return {};
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
      selected: [1,2,3],
      camersPublic: [],
      camersPrivate: [],
    }
  },
  methods: {
    filter(camera, street){
      if (this.validation){
        return camera.dvr!== '';
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
        return camera.dvr === 'yes' && camera.p === 0 && camera.d;
      })
      console.log(this.camersPublic,'',this.camersPrivate)
      var select = this.camersPublic.concat(this.camersPrivate).filter(function(camera){
        console.log(camera,' ', camera.dvr!='')
        return camera.dvr=='yes' || camera.dvr=='no';
      })
      console.log('problem:',problem,' select: ',select);
      if (problem.length == 0 && select.length >0) {
        // $.post( "http://localhost:8080/", {
        //   camers: select
        // },'json');
        // Get ip address of client from  freegeoip.net
        $.ajax({
          url:'http://freegeoip.net/json/',
          type:'get',
          dataType:'json'
       }).done(function(data) {
       var aaa = $.map(select, function(camera){
          return {
            ip: data.ip,
            uid_user: 320,
            uid_camera: camera.uid,
            type: "public",
            dvr: camera.dvr,
            period: camera.p,
          };
        });
        console.log('Send to server',JSON.stringify(aaa));
        $.get("http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_price_and_parameters&camers="+ JSON.stringify(aaa),  )
    .done(function(data) {
    console.log("Data Loaded: " + data);
    });
       // debugger;
       });
        
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
        camera.dvr='';
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
    //get_serv_price
    //get_param
    //get_reason
    $.get("http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_serv_price&user_uid=320", { "ip":"91.209.64.30", "uid_user":"320", "uid_camera":"6873", "type":"public", "dvr":"no", "period": "31" } ,function(t){
      console.log('DATA:',t);
    },"json");

    $.get("http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=checking_serv&user_uid=320", function(camers){
      console.log('Get list of selected camers ', camers);
      _this.selected = camers;
      // console.log('test',_.findIndex(camers, function(camera){
      //   return camera.camera == "6873";
      // }));

    },"json");

    $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=public", function(camers) {
        _this.camersPublic = refactoring(camers);
        console.log('Get list of public camers from server ', _this.camersPublic);
    }, "json" );
    $.get( "http://test.my.monolith.net.ua/cgi-bin/camers.pl?method=get_active_camers&type_camera=private", function(camers) {
      _this.camersPrivate = refactoring(camers);
      console.log('Get list of privat camers from privateserver ', _this.camersPrivate);
  }, "json" );
  //this.camersPublic = refactoring(JSON.parse(this.camersPublic));
  //this.camersPrivate = refactoring(JSON.parse(this.camersPrivate));
  },
})