<template>
  <div>
    <hr><br><br>
    <h2>In my basket :</h2>
    <v-container>
      <v-data-table
          :headers="data"
          :items="basket"
          hide-default-header
          hide-default-footer
          class="elevation-1"
      >
        <template>
              <v-btn class="mx-2" fab dark small color="pink" @click="deleteBasket">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>
        </template>
      </v-data-table><hr><br>
      Moyenne des mortalités : {{average}}
      <br><br>
      <v-btn @click="sendToLab"
             class="ma-4 pa-4"
             large
             rounded
             outlined
      >Send to the lab
      </v-btn>
      <v-btn @click="clearBasket"
              class="ma-4 pa-4"
              large
              rounded
             outlined
      >Vider la sélection
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
      },
      clearBasket: function() {
        this.$store.commit('basket/clearBasket')
      },

      deleteBasket : function (){
        this.$store.commit("basket/removeVirusFromBasket")
      }
    },
  }
</script>

<style scoped>
</style>
