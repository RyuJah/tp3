<template>
  <div>
    <table>
      <tr>
        <td>
          <p v-for="(e,index) in entries" :key="index">
             <v-checkbox :id="index" :value="index" v-model="chosenEntries" @change="$emit('chosen-changed',chosenEntries)" :label="e.code"></v-checkbox>
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'CheckedList',
    props: ['entries','fields'],
    data : () => {
      return {
        chosenEntries:[]
      }
    }
  }
</script>

<style scoped>
</style>
