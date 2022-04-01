<template>
  <div>
    <hr>
    <h1>Library</h1>
    <br>
    <hr>
      <Articles></Articles>
      <router-view name="locDown" ></router-view>
  </div>
</template>

<script>

  import Articles from '../components/Articles.vue'
  export default {
    name: 'Library',
    components: {
      Articles
    }
  }
</script>

<style scoped>
</style>
