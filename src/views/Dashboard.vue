<template>
  <div id="dashboard">
    <div class="navLinks">
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store from '@/store';

@Component
export default class Dashboard extends Vue {

}

</script>

<style>
</style>
