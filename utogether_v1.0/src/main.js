import Vue from 'vue';
import App from './App';
import VueWechatTitle from 'vue-wechat-title'; 
Vue.use(VueWechatTitle);

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
