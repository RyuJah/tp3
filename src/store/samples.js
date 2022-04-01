export default {
    namespaced : true,
    state: ()=>({
        samples: []
    }),

    mutations: {
        clearSamples(state){
            state.samples.splice(0,state.samples.length);
        },
        addSample(state, sample){
            state.samples.push(sample);
        },
        removeSample(state, sample){
            state.samples.splice(sample,1);
        }
    },
    getters: {
        samples(state){
            return state.samples;
        },
    },
    actions: {
    },
    modules: {
    }
}