import { Profile } from './profile';

export class User {
    uname:string;
    pwd:string;
    profile:Profile;

    constructor(uname:string,pwd:string){
        this.uname=uname;
        this.pwd=pwd;
    }
}
