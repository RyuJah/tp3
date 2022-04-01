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
        <template v-slot:item.mortalite="{ item }">
          <v-chip :style="{background : getColor(item.mortalite)}" dark>
            {{ item.mortalite }}
          </v-chip>
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
      >Clear Basket
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

      getColor (mortalite) {
        if (mortalite > 10) return 'red'
        else if (mortalite> 5) return 'orange'
        else return 'green'
      }

    },
  }
</script>

<style scoped>
</style>
