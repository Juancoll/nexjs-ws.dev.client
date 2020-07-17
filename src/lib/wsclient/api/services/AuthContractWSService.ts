import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { AnyData } from '../../models/AnyData';

export class AuthContractWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'authContract';
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new HubNotificationCredentials<any>(this._hub, this.name, 'onUpdate');

    // isAuth: false
    public readonly onDataUpdate = new HubNotificationCredentialsData<any, AnyData>(this._hub, this.name, 'onDataUpdate');
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public print(): Promise<void> {
        return this.request<void>( 'print', null, null );
    }

     // isAuth: false
    public notify(): Promise<void> {
        return this.request<void>( 'notify', null, null );
    }
    //#endregion
}
