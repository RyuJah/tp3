<template>
  <div>
<!--    <table>
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in collec" :key="index"><td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td><td> <button @click="sendToBasket(v)">Clone virus for the lab</button></td></tr>
    </table>-->

    <v-data-table
        :headers="data"
        :items="collec"
        :items-per-page="10"
        class="elevation-1"
        item-key="id"
    >
      <template v-slot:item.mortalite="{ item }">
        <v-chip :style="{background : getColor(item.mortalite)}" dark>
          {{ item.mortalite }}
        </v-chip>
      </template>

      <template v-slot:item.controls="props">
        <v-btn @click="sendToBasket(props.item)"
               class="ma-4 pa-4"
               large
               rounded
               block
        >Clone virus for the lab
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

  export default {
    name: 'Articles',
    computed: {
      collec() {
        return this.$store.getters["viruses/viruses"]
      },
      data() {
        return this.$store.getters["viruses/data"]
      }
    },
    methods: {
      sendToBasket: function (virus) {
        this.$store.commit('basket/addVirusToBasket', virus)
      },
      getColor (mortalite) {
        if (mortalite > 10) return 'red'
        else if (mortalite> 5) return 'orange'
        else return 'green'
      },
    }
  }
</script>

<style scoped>
</style>
