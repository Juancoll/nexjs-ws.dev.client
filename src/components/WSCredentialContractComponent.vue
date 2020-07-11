<template>
    <div style="text-align: left">
        <h2>@nexjs/ws - Credential Contract</h2>
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
                <button @click="notify">send</button> demo.notify()
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wsapi } from '@/wsapi';

@Component
export default class WSCredentialContractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSCredentialContractComponent] constructor()');
    }

    async mounted() {
        console.log('[WSCredentialContractComponent] mounted()');
        wsapi.credentialContract.onUpdate.on(() =>
            console.log(`[credentialContract] onUpdate`)
        );
        wsapi.credentialContract.onDataUpdate.on(data =>
            console.log(`[credentialContract] onDataUpdate`, data)
        );
    }
    async destroyed() {
        console.log('[WSCredentialContractComponent] destroyed()');
        wsapi.credentialContract.onUpdate.off();
        wsapi.credentialContract.onDataUpdate.off();
    }

    async subscribe() {
        try {
            console.log('[WSCredentialContractComponent] subscribe request');
            await wsapi.credentialContract.onUpdate.sub('user-credentials-001');
            await wsapi.credentialContract.onDataUpdate.sub(
                'user-credentials-002'
            );
            console.log('[WSCredentialContractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe() {
        try {
            console.log('[WSCredentialContractComponent] unsubscribe request');
            await wsapi.credentialContract.onUpdate.unsub();
            await wsapi.credentialContract.onDataUpdate.unsub();
            console.log('[WSCredentialContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print() {
        try {
            console.log('[WSCredentialContractComponent] print() request');
            await wsapi.credentialContract.print('user-credentials-003');
            console.log('[WSCredentialContractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify() {
        try {
            console.log('[WSCredentialContractComponent] notify() request');
            await wsapi.credentialContract.notify();
            console.log('[WSCredentialContractComponent] notify() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
