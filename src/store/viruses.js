export default {
    namespaced : true,
    state: ()=>({
        viruses: []
    }),

    mutations: {
        clearViruses(state){
            state.viruses.splice(0,state.viruses.length);
        },
        addVirus(state, virus){
            state.viruses.push(virus);
        },
        removeVirus(state, virus){
            state.viruses.splice(virus,1);
        }
    },
    getters: {
        viruses(state){
            return state.viruses;
        },
    },
    actions: {
    },
    modules: {
    }
}