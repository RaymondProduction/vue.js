var App = {
  section_header : 'Main'
}
Vue.component('section-header', {
  template: '<p>{{name}}</p>',
  data: () => { return {name : App.section_header }},
});
Vue.component('menu-item', {
  props: ['menu'],
  template: '<li>{{ menu.name }}</li>'
});
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    menu: [
      { name: 'Learn JavaScript' },
      { name: 'Learn Vue' },
      { name: 'Build something awesome' }
    ]
  }
})


