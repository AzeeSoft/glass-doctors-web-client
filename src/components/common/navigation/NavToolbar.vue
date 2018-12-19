<template>
    <transition name="nav-toolbar" appear>
        <v-toolbar dark color="primary" id="navToolbar" app clipped-left>
            <div>
                <slot name="hamburgerHolder"></slot>
            </div>
            <img src="../../../../src/assets/images/logo/glass-white.png">
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    class="switch-theme-button py-2 mx-3"
                    color="secondary"
                    round
                    depressed
                    v-on:click="switchTheme()"
                >Switch Theme</v-btn>
                <slot></slot>
            </v-toolbar-items>
        </v-toolbar>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import AppConfig from '@/AppConfig';
    import App from '@/App.vue';

    @Component
    export default class NavToolbar extends Vue {
        private appTitle = AppConfig.title;

        private switchTheme() {
            App.instance.switchTheme();
        }
    }
</script>

<style lang="scss">
    @import "@/scss/common/constants.scss";

    .v-toolbar#navToolbar {
        .v-toolbar__items {
            button.v-btn {
                &.switch-theme-button {
                    height: auto;
                }

                &.router-link-exact-active {
                    border-bottom: $border-medium solid $accentColor;
                }
            }
        }
    }

    /* Transitions */

    .nav-toolbar-enter-active,
    .nav-toolbar-leave-active {
        transition: transform 0.5s !important;
    }
    .nav-toolbar-enter,
    .nav-toolbar-leave-to {
        transform: translateY(-100px) !important;
    }
</style>
