// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import Layout from './components/layout'

//Vue.config.productionTip = false

/* eslint-disable no-new */
var yCat ={
  template:'<p>This is the header</p>'
}
new Vue({
  el: '#app',
  components: {
    App,
    'yCat':yCat
  },
  //data:data,
  template: '<App/>'
})
