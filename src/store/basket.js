export default {
    namespaced : true,
    state: () =>({
        basket: []
    }),

    mutations: {
        clearBasket(state){
            state.basket.splice(0,state.basket.length);
        },
        addVirusToBasket(state, virus){
            state.basket.push(virus);
        },
        removeVirusFromBasket(state, virus){
            state.basket.splice(virus,1);
        }

    },
    getters: {
        basket(state){
            return state.basket;
        },
        averageMortalityBasket(state){
            if(state.basket.length ===0){
                return 0
            }
            let avg=0
            state.basket.forEach(v=>{
                avg+=v.mortalite
            })
            return avg/state.basket.size()
        }
    },
    actions: {
    },
    modules: {
    }
}