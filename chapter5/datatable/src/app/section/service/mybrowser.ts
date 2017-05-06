import Browser from './browser';

export default class MyBrowser implements Browser {

    constructor(public id?: any, public engine?: any, public browser?: any, public platform?: any,
                public version?: any, public code?: any, public grade?: any, public rating?: any) {}
}
