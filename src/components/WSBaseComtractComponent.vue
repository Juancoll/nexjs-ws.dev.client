<template>
    <div style="text-align: left">
        <h2>@nexjs/ws - Base Contract</h2>
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
import { wsapi } from '@/wsapi';

@Component
export default class WSBaseComtractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSBaseComtractComponent] constructor()');
    }

    async mounted() {
        console.log('[WSBaseComtractComponent] mounted()');
        wsapi.baseContract.onUpdate.on(() =>
            console.log(`[baseContract] onUpdate`)
        );
        wsapi.baseContract.onDataUpdate.on(data =>
            console.log(`[baseContract] onDataUpdate`, data)
        );
    }
    async destroyed() {
        console.log('[WSBaseComtractComponent] destroyed()');
        wsapi.baseContract.onUpdate.off();
    }

    async subscribe() {
        try {
            console.log('[WSBaseComtractComponent] subscribe request');
            await wsapi.baseContract.onUpdate.sub();
            await wsapi.baseContract.onDataUpdate.sub();
            console.log('[WSBaseComtractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe() {
        try {
            console.log('[WSBaseComtractComponent] unsubscribe request');
            await wsapi.baseContract.onUpdate.unsub();
            await wsapi.baseContract.onDataUpdate.unsub();
            console.log('[WSBaseComtractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print() {
        try {
            console.log('[WSBaseComtractComponent] print() request');
            await wsapi.baseContract.print();
            console.log('[WSBaseComtractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async delay() {
        try {
            console.log('[WSBaseComtractComponent] delay() request');
            await wsapi.baseContract.delay(5000);
            console.log('[WSBaseComtractComponent] delay() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify() {
        try {
            console.log('[WSBaseComtractComponent] notify() request');
            await wsapi.baseContract.notify();
            console.log('[WSBaseComtractComponent] notify() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
