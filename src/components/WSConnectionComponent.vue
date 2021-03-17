<template>
    <div style="text-align: left">
        <h2>@nexjs/ws - Connection</h2>
        <ul>
            <li>
                <button @click="connect">connect</button>
                <button @click="disconnect">disconnect</button>
                <input type="text" v-model="url" />
                <input type="text" v-model="path" style="width: 100px" />
                <input type="text" v-model="nsp" style="width: 50px" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wsapi } from '@/wsapi';

@Component
export default class WSConnectionComponent extends Vue {
    url = 'http://localhost:3000';
    path = '/socket.io';
    nsp = '/';

    constructor() {
        super();
        console.log('[WSConnectionComponent] constructor()');
    }

    async mounted() {
        console.log('[WSConnectionComponent] mounted()');
    }
    async destroyed() {
        console.log('[WSConnectionComponent] destroyed()');
    }

    async connect() {
        try {
            console.log(
                `[WSConnectionComponent] connect(${this.url}, ${this.path}, ${this.nsp}) request`
            );
            await wsapi.ws.connectAsync(this.url, this.path, this.nsp);
            console.log('[WSConnectionComponent] connect() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async disconnect() {
        try {
            console.log('[WSConnectionComponent] disconnect() request');
            await wsapi.ws.disconnect();
            console.log('[WSConnectionComponent] disconnect() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
