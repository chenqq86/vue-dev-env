import Vue from 'vue';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App';

Vue.use(Antd)

new Vue({
    render: h => h(App)
}).$mount('#app')

if (module.hot) {
  module.hot.accept();
}