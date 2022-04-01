<template>
  <div>
    <table>
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in collec" :key="index"><td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td><td> <button @click="sendToBasket(v)">Clone virus for the lab</button></td></tr>
    </table>
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
        return this.$store.getters["viruses/titres"]
      }
    },
    methods: {
      sendToBasket: function (virus) {
        this.$store.commit('basket/addVirusToBasket', virus)
      }
    }
  }
</script>

<style scoped>
</style>
