<template>
  <div>
    <v-container>
      <h1>Labo</h1>
      <br><hr>
      <keep-alive include="Mixer">
        <router-view name="locSubCentral"></router-view>
      </keep-alive>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Labo',
  }
</script>

<style scoped>
</style>
