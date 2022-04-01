
<template>
  <div>
<!--    <button v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})">{{t.text}}</button>-->

<!--**************************************-->
<!--    <v-container>
      <v-row>
        <v-col  v-for="(t,index) in titles" :key="index" cols="4" md="4">
          <v-btn :style="{color: t.color}"  @click="$router.push({path:t.path}) "
                 class="ma-10 pa-5"
                 shaped
                 large
                 block
          >
            {{t.text}}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>-->

<!--**********************-->
    <!--
    <v-bottom-navigation
        color="primary"
        horizontal
        grow
    >
      <v-btn v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})" >
        <span>{{ t.text }}</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
    -->
<!--****************-->

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

        <v-app-bar-title>Title</v-app-bar-title>

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
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-bottom-navigation>
          <!--
          <v-tabs align-with-title >
            <v-tab v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})">{{ t.titles }}</v-tab>
          </v-tabs>
          -->
        </template>
      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
      >
        <v-container style="height: 220px;"></v-container>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
