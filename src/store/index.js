import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        viruses: [],
        samples: [],
        parts: [],
        basket: []
    },
    getters: {
        allViruses(state) {
            let viruses = []
            for(let i; i < state.viruses.length; i++) {
                viruses.push(state.viruses[i]);
            }
            return viruses
        },
        getViruse(state, id) {
            return self.chosenViruses[id]
        },


    },
    mutations: {

    },
    actions: {
    },
    modules: {
    }
})