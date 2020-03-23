import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

// Vue.component(
//     'app', 
//     require('./components/App.vue').default
// );

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        App
    },
    render: h => h(App)
});