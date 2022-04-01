export default {
    namespaced : true,
    state: ()=>({
        parts: []
    }),

    mutations: {
        clearParts(state){
            state.parts.splice(0,state.parts.length);
        },
        addPart(state, part){
            state.parts.push(part);
        },
        removePart(state, part){
            state.parts.splice(part,1);
        },
    },
    getters: {
        parts(state){
            return state.parts;
        },
    },
    actions: {
    },
    modules: {
    }
}