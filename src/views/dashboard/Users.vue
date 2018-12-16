<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user._id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UsersService from '@/services/UsersService';

@Component({

})
export default class Users extends Vue {
  private users = [];

  private mounted() {
    this.getUsers();
  }

  private async getUsers() {
    const response = await UsersService.fetchUsers();
    this.users = response.data.users;
  }
}

</script>
