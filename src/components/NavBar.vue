
<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          absolute
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/200/300"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Le laboratoire du Dr Mad....</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-bottom-navigation
              color="primary"
              horizontal
              grow
          >
            <v-btn v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})" >
              <span>{{ t.text }}</span>
              <v-icon v-if="index ==0">mdi-home</v-icon>
              <v-icon v-if="index ==1">mdi-beaker</v-icon>
              <v-icon v-if="index ==2">mdi-book</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </template>
      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
      >
        <v-container style="height: 240px;"></v-container>
      </v-sheet>
    </v-card>


  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['titles'],

  }
</script>

<style scoped>
</style>
