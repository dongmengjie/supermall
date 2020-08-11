import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
axios.get('/url',{
  params:{
    
  }
}).then(function(Response){
  console.log(response);
}).catch(function(error){
console.log(error);
})