import { lib } from '../..'

import { AnyData } from '../../models/AnyData'

export class AuthContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'authContract'
    //#endregion

    //#region [ hub ]
    public readonly onUpdate = new lib.HubEvent(this._hub, this.name, 'onUpdate')

    // isAuth: false
    public readonly onDataUpdate = new lib.HubEventData<AnyData>(this._hub, this.name, 'onDataUpdate')
    //#endregion

    //#region [ rest ]

    // isAuth: true
    public print(): Promise<void> {
        return this.request<void>('print', null)
    }

    // isAuth: true
    public notify(): Promise<void> {
        return this.request<void>('notify', null)
    }
    //#endregion
}
