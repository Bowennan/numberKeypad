import numPanel from './numberplate.vue'

const plugin = {
    install (Vue, options) {
        Vue.prototype.$msg = 'Hello I am test.js';
        Vue.component('numPanel', numPanel)
    }
}

export default plugin