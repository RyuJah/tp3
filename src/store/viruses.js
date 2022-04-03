import {viruses} from "@/model";
import axios from 'axios';

var urlApi="http://localhost:8000" //addresse de l'api

axios.get( urlApi+"/viruses")
    .then(res=>{
        viruses=res.data;
    })
    .catch(err=>{
        console.log("Erreur fetch virus : "+err);
    })

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
        addVirus(state, virus){
            state.viruses.push(virus);
            axios.post(urlApi+"/viruses",virus).catch(err=>{console.log("Erreur ajout virus : "+err)})
        },
        removeVirus(state, virus){
            state.viruses.splice(virus,1);
            axios.delete(urlApi+"/viruses",virus).catch(err=>{console.log("Erreur remove virus : "+err)})
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