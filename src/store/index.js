import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import basket from './basket.js'
import parts from './parts.js'
import samples from './samples.js'
import viruses from './viruses.js'

export default new Vuex.Store({
    modules:{
        basket,
        parts,
        samples,
        viruses
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
})