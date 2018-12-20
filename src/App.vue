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
    @import "@/scss/common/global.scss";
    @import "@/scss/common/transitions.scss";
</style>

<style lang="scss" scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        min-height: 100%;
    }
</style>

