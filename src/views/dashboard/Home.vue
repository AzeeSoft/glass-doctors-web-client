<template>
    <div class="home">
        <v-img alt="Vue logo" :src="logoImage"></v-img>
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
