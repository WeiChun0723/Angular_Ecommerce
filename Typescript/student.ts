export class Passport {
    public constructor(public country:string, 
        public passportNumber:string) {
    }
}

export class Status {
    public constructor(public status:boolean,
        public remark:string) {
    }
}

export class Student {
    
    public firstName:string;
    public lastName:string
    public icNumber:number;
    public passport?:Passport; // has a relationship
    public status!:Status;

    constructor(firstName:string, lastName:string, icNumber:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.icNumber = icNumber;
        this.retrieveStatus();
    }

    public retrieveStatus() {
        this.status = new Status(true, "All Ok");
    }

    public display() {
        console.log("First Name:", this.firstName);
        console.log("Last Name:", this.lastName);
        console.log("IC Number:", this.icNumber);
    }
}