<template>
    <div id="dashboard">
        <NavToolbar>
            <router-link to="../home" append tag="v-btn" class="v-btn--flat">Home</router-link>
            <router-link to="../users" append tag="v-btn" class="v-btn--flat">Users</router-link>
            <router-link to="../about" append tag="v-btn" class="v-btn--flat">About</router-link>
            <v-btn class="primary" flat v-on:click="logout()">Logout</v-btn>
        </NavToolbar>
        <v-content class="dashboard-content">
            <v-container class="dashboard-container" fluid>
                <v-layout class="dashboard-layout" row justify-center mt-5>
                    <v-flex xs12 sm8 md6 lg4>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app>
            <v-container pa-0>
                <v-layout>
                    <v-flex>Made with ❤️ by Azee</v-flex>
                    ©️ {{ new Date().getFullYear() }}
                </v-layout>
            </v-container>
        </v-footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store from '@/store';
import NavToolbar from '@/components/common/navigation/NavToolbar.vue';
import authService from '@/services/authService';

@Component({
    components: {
        NavToolbar,
    },
})
export default class Dashboard extends Vue {
    private async logout() {
        const resData = await authService.logoutSession();
        if (resData.success) {
            this.goToLoginScreen();
        }
    }

    private goToLoginScreen() {
        this.$router.push('/auth/login');
    }

    private async mounted() {
        const resData = await authService.validateApiToken();
        if (!resData.success) {
            this.goToLoginScreen();
        }
    }
}
</script>

<style>
</style>
