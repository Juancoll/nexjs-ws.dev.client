<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
        <WSConnectionComponent />
        <WSBaseContractComponent />
        <WSCredentialContractComponent />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WSConnectionComponent from './components/WSConnectionComponent.vue';
import WSBaseContractComponent from './components/WSBaseContractComponent.vue';
import WSCredentialContractComponent from './components/WSCredentialContractComponent.vue';

@Component({
    components: {
        WSConnectionComponent,
        WSBaseContractComponent,
        WSCredentialContractComponent
    }
})
export default class App extends Vue {
    constructor() {
        super();
        console.log('[App] constructor');
    }
    mounted(){
        console.log('[App] mounted');
    }
    destroyed(){
        console.log('[App] destroyed');
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
