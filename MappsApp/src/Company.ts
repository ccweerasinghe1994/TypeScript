import faker from "faker";

export class Company {

    companyName:string,
    cathPhrase:string,
    location:{
        lat:number,
        lng:number
    }
    constructor(){
        this.companyName = faker.Company
    }

}