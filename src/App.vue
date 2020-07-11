<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
        <WSConnectionComponent />
        <WSBaseComtractComponent />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WSConnectionComponent from './components/WSConnectionComponent.vue';
import WSBaseComtractComponent from './components/WSBaseComtractComponent.vue';

@Component({
    components: {
        WSConnectionComponent,
        WSBaseComtractComponent
    }
})
export default class App extends Vue {
    constructor() {
        super();
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
