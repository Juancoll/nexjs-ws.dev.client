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
            <li><button @click="notify">send</button> demo.notify()</li>
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
        wsapi.credentialContract.onUpdateData.on((data) =>
            console.log(`[credentialContract] onUpdateData`, data)
        );

        wsapi.credentialContract.onUpdateSelection.on(() =>
            console.log(`[credentialContract] onUpdateSelection`)
        );
        wsapi.credentialContract.onUpdateSelectionData.on((data) =>
            console.log(`[credentialContract] onUpdateSelectionData`, data)
        );

        wsapi.credentialContract.onUpdateValidation.on(() =>
            console.log(`[credentialContract] onUpdateValidation`)
        );
        wsapi.credentialContract.onUpdateValidationData.on((data) =>
            console.log(`[credentialContract] onUpdateValidationData`, data)
        );

        wsapi.credentialContract.onUpdateValidationSelection.on(() =>
            console.log(`[credentialContract] onUpdateValidationSelection`)
        );
        wsapi.credentialContract.onUpdateValidationSelectionData.on((data) =>
            console.log(`[credentialContract] onUpdateValidationData`, data)
        );
    }
    async destroyed() {
        console.log('[WSCredentialContractComponent] destroyed()');
        wsapi.credentialContract.onUpdate.off();
        wsapi.credentialContract.onUpdateData.off();
        wsapi.credentialContract.onUpdateSelection.off();
        wsapi.credentialContract.onUpdateSelectionData.off();
        wsapi.credentialContract.onUpdateValidation.off();
        wsapi.credentialContract.onUpdateValidationData.off();
        wsapi.credentialContract.onUpdateValidationSelection.off();
        wsapi.credentialContract.onUpdateValidationSelectionData.off();
    }

    async subscribe() {
        try {
            console.log('[WSCredentialContractComponent] subscribe request');
            await wsapi.credentialContract.onUpdate.sub();
            await wsapi.credentialContract.onUpdateData.sub();
            await wsapi.credentialContract.onUpdateSelection.sub();
            await wsapi.credentialContract.onUpdateSelectionData.sub();
            await wsapi.credentialContract.onUpdateValidation.sub(1234);
            await wsapi.credentialContract.onUpdateValidationData.sub(1234);
            await wsapi.credentialContract.onUpdateValidationSelection.sub(
                1234
            );
            await wsapi.credentialContract.onUpdateValidationSelectionData.sub(
                1234
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
            await wsapi.credentialContract.onUpdateData.unsub();
            await wsapi.credentialContract.onUpdateSelection.unsub();
            await wsapi.credentialContract.onUpdateSelectionData.unsub();
            await wsapi.credentialContract.onUpdateValidation.unsub();
            await wsapi.credentialContract.onUpdateValidationData.unsub();
            await wsapi.credentialContract.onUpdateValidationSelection.unsub();
            await wsapi.credentialContract.onUpdateValidationSelectionData.unsub();
            console.log('[WSCredentialContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print() {
        try {
            console.log('[WSCredentialContractComponent] print() request');
            await wsapi.credentialContract.print();
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
