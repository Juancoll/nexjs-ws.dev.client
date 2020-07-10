import { WSApiBase, IWSBase } from '@nexjs/wsclient';

import { BaseContractWSService } from './services/BaseContractWSService';
import { CredentialContractWSService } from './services/CredentialContractWSService';

export class WSApi<TUser, Token> extends WSApiBase<TUser, Token> {
    public readonly baseContract = new BaseContractWSService(this.rest, this.hub);
    public readonly credentialContract = new CredentialContractWSService(this.rest, this.hub);

    constructor(ws: IWSBase){
        super(ws);
    }
}
