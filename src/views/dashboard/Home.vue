<template>
    <div class="home">
        <v-flex d-flex justify-center>
              <v-img alt="Vue logo" :src="logoImage" max-width="300px"></v-img>
        </v-flex>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class Home extends Vue {
        private logoImage = require('@/assets/images/logo/hi-res/glass-black.png');
    }
</script>
