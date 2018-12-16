<template>
  <div class="login">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :rules="[rules.required, rules.min]"
          :type="showPassword ? 'text' : 'password'"
          hint="At least 8 characters"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" v-on:click="login()">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Login extends Vue {
  private username: string = '';
  private password: string = '';

  private showPassword: boolean = false;
  private rules = {
    required: (value: string) => !!value || 'Required',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
  };

  private login() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);

  }
}
</script>
