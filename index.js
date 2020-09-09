import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //Vuesax styles
import App from './App.vue';
import './src/style/common.scss';

Vue.use(Vuesax, {
    // options here
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
}).$mount('#app');
