<template>
  <div>
    <v-container>
      <h2 style="text-align: left;">Parts :</h2>
      <CheckedList :fields="['code']" :entries="parts" @chosen-changed="chosenParts = $event"></CheckedList>
    </v-container>

    <v-btn @click="mix()" :disabled="chosenParts.length===0" rounded>Mixing</v-btn>
    <v-btn @click="$router.push({path:'/labo/slice'})" rounded>Go to slicer</v-btn>

    <v-simple-table v-if="newVirus != null" style="margin-top: 20px">
      <template v-slot:default>
        <thead>
          <tr>
            <th ></th>
            <th >Name</th>
            <th >Input</th>
            <th >Code</th>
            <th >Mortality</th>
            <th ></th>
          </tr>
        </thead>
        <br>

        <tbody>
        <tr>
          <td>New virus:</td>
          <td>          <v-text-field
              label="Name"
              :value="newVirus.name"
              hint="For example, Corona Alpha or Beta "
              outlined
              rounded
          ></v-text-field></td>
          <td>{{newVirus.code}}</td>
          <td :style="{background : getColor(newVirus.mortalite)}" >{{newVirus.mortalite}}</td>

          <td>
            <v-btn @click="sendToLibrary" class="mr-10 pa-5" shaped outlined>
              Send to Library
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
  import {Virus} from '@/model'
  import CheckedList from '../components/CheckedList.vue'

  export default {
    name: 'Mixer',
    computed: {
      parts(){
        return this.$store.getters["parts/parts"]
      },
      viruses(){
        return this.$store.getters["viruses/viruses"]
      }

    },
    data : () => {
      return {
        chosenParts:[],
        newVirus : null
      }
    },
    components: {
      CheckedList
    },
    methods: {
      mix : function() {
        let newCode="";

        let chosen = [...this.chosenParts];
        let nb = chosen.length;
        for(let i=0;i<nb;i++) {

          let idx = Math.floor(Math.random() * chosen.length);
          let p = this.parts[chosen[idx]];
          newCode = newCode+p.code;
          chosen.splice(idx,1);
        }
        this.newVirus = new Virus(this.viruses.length,'mixedvirus',newCode);
        for(let i=this.chosenParts.length-1;i>=0;i--) {
          this.$store.commit("parts/removePart",this.chosenParts[i])
        }
        this.chosenParts.splice(0,this.chosenParts.length)
      },
      sendToLibrary : function() {
        this.$store.commit("viruses/addVirus",this.newVirus)
        this.newVirus = null;
      },
      getColor (mortalite) {
        if (mortalite > 10) return 'red'
        else if (mortalite> 5) return 'orange'
        else return 'green'
      }
    }
  }
</script>

<style scoped>
</style>
