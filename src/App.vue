<template>
  <div id="app">
    <v-app :dark="darkThemeMode">
      <router-view/>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {

  public static instance: App;

  private darkThemeMode = false;

  public switchTheme() {
    this.darkThemeMode = !this.darkThemeMode;
  }

  private mounted() {
    App.instance = this;
  }
}
</script>


<style lang="scss">
@import "@/scss/common/constants.scss";

* {
  box-sizing: border-box;
  transition: color 0.2s linear;
  transition: background-color 0.2s linear;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

html {
  overflow: auto !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 0px;
}

::-webkit-scrollbar-track {
  width: 3px;
  background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb {
  width: 10px;
  background-color: $secondaryColor;
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.8);
  // border-radius: 3px;
}
</style>
