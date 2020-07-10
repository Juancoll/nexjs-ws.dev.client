<template>
    <div style="text-align: left">
        <h2>@nexjs/ws - Basics</h2>
        <button @click="connect">connect</button>
        <button @click="disconnect">disconnect</button>
        <input type="text" :value="url" />

        <h2>Demo Contract</h2>
        <ul>
            <li>
                <button @click="subscribe">subscribe</button>
                <button @click="unsubscribe">unsubscribe</button>
            </li>
            <li>
                <button @click="print">send</button>
                demo.print()
            </li>
            <li>
                <button @click="printWithCredentials">send</button>
                demo.printWithCredentials()
            </li>
            <li>
                <button @click="delay">send</button> demo.delay()
            </li>
            <li>
                <button @click="notify">send</button> demo.notify()
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { WSApi } from '../lib/wsclient';
import { User, Token } from '../lib/wsclient/models';
import { SocketIOClient } from '../@nexjs/wsclient';

@Component
export default class WSBasics extends Vue {
    url = 'http://localhost:3000';
    wsapi: WSApi<User, Token>;

    constructor() {
        super();
        console.log('[WSBaseComponent] constructor()');
        this.wsapi = new WSApi<User, Token>(new SocketIOClient());

        this.wsapi.baseContract.onUpdate.on(() =>
            console.log(`[baseContract] onUpdate`)
        );
        this.wsapi.baseContract.onDataUpdate.on(data =>
            console.log(`[baseContract] onDataUpdate`, data)
        );
    }

    async mounted() {
        console.log('[WSBaseComponent] mounted()');
    }

    async connect() {
        try {
            console.log('[WSBaseComponent] connect() request');
            await this.wsapi.ws.connectAsync(this.url, '/socket.io', '');
            console.log('[WSBaseComponent] connect() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async disconnect() {
        try {
            console.log('[WSBaseComponent] disconnect() request');
            await this.wsapi.ws.disconnect();
            console.log('[WSBaseComponent] disconnect() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async subscribe() {
        try {
            console.log('[WSBaseComponent] subscribe request');
            await this.wsapi.baseContract.onUpdate.sub();
            await this.wsapi.baseContract.onDataUpdate.sub();
            console.log('[WSBaseComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe() {
        try {
            console.log('[WSBaseComponent] unsubscribe request');
            await this.wsapi.baseContract.onUpdate.unsub();
            await this.wsapi.baseContract.onDataUpdate.unsub();
            console.log('[WSBaseComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print() {
        try {
            console.log('[WSBaseComponent] print() request');
            await this.wsapi.baseContract.print();
            console.log('[WSBaseComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async printWithCredentials() {
        try {
            console.log('[WSBaseComponent] printWithCredentials() request');
            await this.wsapi.baseContract.printWithCredentials('2234');
            console.log('[WSBaseComponent] printWithCredentials() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async delay() {
        try {
            console.log('[WSBaseComponent] delay() request');
            await this.wsapi.baseContract.delay(5000);
            console.log('[WSBaseComponent] delay() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify() {
        try {
            console.log('[WSBaseComponent] notify() request');
            await this.wsapi.baseContract.notify();
            console.log('[WSBaseComponent] notify() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
