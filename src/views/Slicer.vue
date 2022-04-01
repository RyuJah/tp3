<template>
  <div>
    <v-container>
      <h2 style="text-align: left;">Viruses</h2>
      <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="chosenViruses = $event" />
      <br>
      <tr>
        <td><v-text-field
            label="Part Length:"
            id="cute"
            v-model.number="cutFactor"
            outlined
            rounded
        ></v-text-field></td>
        <td><v-text-field
            label="Nb mutations"
            v-model.number="nbMutation"
            outlined
            rounded
        ></v-text-field></td>
      </tr>
      <tr>
        <td><v-btn @click="cut()" :disabled="chosenViruses.length===0" class="ma-4 pa-4" large rounded block>Cut</v-btn></td>
        <td><v-btn @click="mutation()" :disabled="chosenViruses.length===0" class="ma-4 pa-4" large rounded block>Mutation</v-btn></td>
      </tr>
      <br><hr><br>

      <v-btn @click="$router.push({path:'/labo/mix'})" rounded outlined block>Go to mixer</v-btn>
    </v-container>
  </div>
</template>

<script>
  import CheckedList from '../components/CheckedList.vue'

  export default {
    name: 'Slicer',
    computed:{
      samples() {
        return this.$store.getters["samples/samples"];
      }
    },
    data : () => {
      return {
        chosenViruses:[],
        cutFactor: 5,
        nbMutation : 10,
      }
    },
    components: {
      CheckedList
    },
    methods: {
      cut : function() {
        if (this.cutFactor === 0) return;
        this.chosenViruses.forEach(e => {
          let s = this.samples[e];
          for(let i=0;i<s.code.length;i+=this.cutFactor) {
            this.$store.commit("parts/addPart",{code : s.code.substring(i,i+this.cutFactor)})
          }
        });
        for(let i=this.chosenViruses.length-1;i>=0;i--) {
          this.$store.commit("samples/removeSample",this.chosenViruses[i])
        }
        this.chosenViruses.splice(0,this.chosenViruses.length)
      },
      mutation : function() {
        if (this.nbMutation === 0) return;

        this.chosenViruses.forEach(e => {
          let newCode;
          let s = this.samples[e];
          for(let i=0;i<this.nbMutation;i++) {
            let idx = Math.floor(Math.random() * s.code.length);
            let chr =  String.fromCharCode(Math.floor(Math.random() * 4)+ "A".charCodeAt(0));
            newCode = s.code.substring(0,idx) + chr + s.code.substring(idx+1);
            s.code = newCode;
            s.updateCaracs();
          }
        });
      }
    }
  }
</script>

<style scoped>
</style>
