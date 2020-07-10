
export class Data {
    public a: string;
    public b: boolean;

    constructor(init?: Partial<Data>) {  Object.assign(this, init); }


}
