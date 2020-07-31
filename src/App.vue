<template>
    <div id="app">
        <h1>nexjs-client-dev</h1>
        <img alt="Vue logo" src="./assets/icon_256.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
        <WSConnectionComponent />
        <WSBaseContractComponent />
        <WSCredentialContractComponent />
        <WSAuthContractComponent />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WSConnectionComponent from './components/WSConnectionComponent.vue';
import WSBaseContractComponent from './components/WSBaseContractComponent.vue';
import WSCredentialContractComponent from './components/WSCredentialContractComponent.vue';
import WSAuthContractComponent from './components/WSAuthContractComponent.vue';

@Component({
    components: {
        WSConnectionComponent,
        WSBaseContractComponent,
        WSCredentialContractComponent,
        WSAuthContractComponent
    }
})
export default class App extends Vue {
    constructor() {
        super();
        console.log('[App] constructor');
    }
    mounted() {
        console.log('[App] mounted');
    }
    destroyed() {
        console.log('[App] destroyed');
    }
}
</script>

<style lang="scss">
html,
body {
    margin: 0px;
    padding: 0px;
    background-color: black;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: lightgray;
    padding: 10px;
}
button {
    width: 100px;
}
</style>
