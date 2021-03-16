import { lib } from '../..'

import { AnyData } from '../../models/AnyData'

export class CredentialContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'credentialContract'
    //#endregion

    //#region [ hub ]

    public readonly onUpdate = new lib.HubEvent(this._hub, this.name, 'onUpdate')
    public readonly onUpdateData = new lib.HubEventData<AnyData>(this._hub, this.name, 'onUpdateData')

    public readonly onUpdateSelection = new lib.HubEvent(this._hub, this.name, 'onUpdateSelection')
    public readonly onUpdateSelectionData = new lib.HubEventData<AnyData>(this._hub, this.name, 'onUpdateSelectionData')

    public readonly onUpdateValidation = new lib.HubEventValidation<number>(this._hub, this.name, 'onUpdateValidation')
    public readonly onUpdateValidationData = new lib.HubEventValidationData<number, AnyData>(this._hub, this.name, 'onUpdateValidationData')

    public readonly onUpdateValidationSelection = new lib.HubEventValidation<number>(this._hub, this.name, 'onUpdateValidationSelection')
    public readonly onUpdateValidationSelectionData = new lib.HubEventValidationData<number, AnyData>(this._hub, this.name, 'onUpdateValidationSelectionData')
    //#endregion

    //#region [ rest ]

    // isAuth: false
    public print(): Promise<void> {
        return this.request<void>('print', null)
    }

    // isAuth: false
    public notify(): Promise<void> {
        return this.request<void>('notify', null)
    }
    //#endregion
}
