<template>
  <div id="auth">
    <NavToolbar>
      <router-link to="../login" append tag="v-btn" class="v-btn--flat">Login</router-link>
      <router-link to="../signUp" append tag="v-btn" class="v-btn--flat">Sign Up</router-link>
    </NavToolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AppConfig from '@/AppConfig';
import NavToolbar from '@/components/common/navigation/NavToolbar.vue';

@Component({
  components: {
    NavToolbar,
  },
})
export default class Auth extends Vue {

}

</script>

<style lang="scss" scoped>

</style>

