<template>
  <div>
    <hr><br><br>
    <h2>In my basket :</h2>
<!--    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in basket" :key="index">
        <td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td>
      </tr>
    </table>-->
    <v-container>
      <v-data-table
          :headers="data"
          :items="basket"
          hide-default-header
          hide-default-footer
          class="elevation-1"
      >
      </v-data-table><hr><br>
      Moyenne des mortalités : {{average}}
      <br><br>
      <v-btn @click="sendToLab"
             class="ma-4 pa-4"
             large
             rounded
      >Send to the lab
      </v-btn>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Basket',
    props: ['operation','name','code'],
    computed: {
      basket() {
        return this.$store.getters["basket/basket"];
      },
      samples(){
        return this.$store.getters["samples/samples"];
      },
      data(){
        return this.$store.getters["viruses/data"];
      },
      average(){
        return this.$store.getters["basket/averageMortalityBasket"]
      }
    },
    methods: {
      sendToLab : function() {
        let basket = this.basket
        basket.forEach(v =>{
          this.$store.commit('samples/addSample',v)
        })
        this.$store.commit("basket/clearBasket")
      }
    },
  }
</script>

<style scoped>
</style>
