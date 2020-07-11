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
export default class WSBaseContractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSBaseContractComponent] constructor()');
    }

    async mounted() {
        console.log('[WSBaseContractComponent] mounted()');
        wsapi.baseContract.onUpdate.on(() =>
            console.log(`[baseContract] onUpdate`)
        );
        wsapi.baseContract.onDataUpdate.on(data =>
            console.log(`[baseContract] onDataUpdate`, data)
        );
    }
    async destroyed() {
        console.log('[WSBaseContractComponent] destroyed()');
        wsapi.baseContract.onUpdate.off();
        wsapi.baseContract.onDataUpdate.off();
    }

    async subscribe() {
        try {
            console.log('[WSBaseContractComponent] subscribe request');
            await wsapi.baseContract.onUpdate.sub();
            await wsapi.baseContract.onDataUpdate.sub();
            console.log('[WSBaseContractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe() {
        try {
            console.log('[WSBaseContractComponent] unsubscribe request');
            await wsapi.baseContract.onUpdate.unsub();
            await wsapi.baseContract.onDataUpdate.unsub();
            console.log('[WSBaseContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print() {
        try {
            console.log('[WSBaseContractComponent] print() request');
            await wsapi.baseContract.print();
            console.log('[WSBaseContractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async delay() {
        try {
            console.log('[WSBaseContractComponent] delay() request');
            await wsapi.baseContract.delay(2000);
            console.log('[WSBaseContractComponent] delay() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify() {
        try {
            console.log('[WSBaseContractComponent] notify() request');
            await wsapi.baseContract.notify();
            console.log('[WSBaseContractComponent] notify() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
