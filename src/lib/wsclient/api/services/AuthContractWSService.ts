import { lib } from '../..'

import { AnyData } from '../../models/AnyData'

export class AuthContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'authContract'
    //#endregion

    //#region [ hub ]

    // isAuth: true
    public readonly onUpdate = new lib.HubEventSelector<number>( this._hub, this.name, 'onUpdate' )

    // isAuth: true
    public readonly onDataUpdate = new lib.HubEventSelectorData<number, AnyData>( this._hub, this.name, 'onDataUpdate' )
    //#endregion

    //#region [ rest ]

    // isAuth: true
    public print ( ): Promise<void> {
        return this.request<void>( 'print', null)
    }

    // isAuth: true
    public notify ( ): Promise<void> {
        return this.request<void>( 'notify', null)
    }
    //#endregion
}
