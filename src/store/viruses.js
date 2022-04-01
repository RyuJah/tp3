import {viruses} from "@/model";
export default {
    namespaced : true,
    state: ()=>({
        viruses,
        data: [
            {text: 'Names', value: 'name'},
            {text: 'Codes', value: 'code'},
            {text: 'Mortalites', value: 'mortalite'},
            { text: "", value: "controls", sortable: false }
        ]
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
        data(state){
            return state.data;
        },
        viruses(state){
            return state.viruses;
        }
    },
    actions: {
    },
    modules: {
    }
}