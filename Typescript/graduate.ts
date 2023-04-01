import {Student} from './student';

export class Graduate extends Student {
    
    public alumniNumber:number;
    
    public constructor(firstName:string, lastName:string, 
            icNumber:number, alumniNumber:number) {
        super(firstName, lastName, icNumber);
        this.alumniNumber = alumniNumber;
    }

    public display() {
        super.display();
        console.log("Alumni Number:", this.alumniNumber);
    }

}