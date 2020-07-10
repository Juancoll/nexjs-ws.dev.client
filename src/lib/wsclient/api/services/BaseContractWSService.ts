import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { Data } from '../../models/Data';

export class BaseContractWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'baseContract';
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new HubNotification(this._hub, this.name, 'onUpdate');

    // isAuth: false
    public readonly onDataUpdate = new HubNotificationData<Data>(this._hub, this.name, 'onDataUpdate');
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public print(): Promise<void> {
        return this.request<void>( 'print', null, null );
    }

     // isAuth: false
    public printWithCredentials(credentials: any): Promise<void> {
        return this.request<void>( 'printWithCredentials', null, credentials );
    }

     // isAuth: false
    public delay(): Promise<number> {
        return this.request<number>( 'delay', null, null );
    }

     // isAuth: false
    public notify(): Promise<void> {
        return this.request<void>( 'notify', null, null );
    }

     // isAuth: false
    public printSomethink(): Promise<void> {
        return this.request<void>( 'printSomethink', null, null );
    }
    //#endregion
}
