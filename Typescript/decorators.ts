type Data = {
    author:string,
    capture:string[]
}

function isFound(data:string[], key:string):boolean {
    return !(data.indexOf(key) === -1);
}

// when somebody calls getCurrentBalance method since it is already
// decorated with @log the log function gets called instead of executing
// getCurrentBalance method.
// The getCurrentBalance method (original method) is passed to the log function in
// typedPropertyDescriptor.value attribute
// The log function will return typedPropertyDescriptor, and now 
// the function inside the typedPropertyDescriptor.value attribute will be executed
function log (data:Data) {
    return function (target:any, key:string, typedPropertyDescriptor:TypedPropertyDescriptor<any>) {
        // console.log("I am inside the log function");
        let originalMethod = typedPropertyDescriptor.value;
        typedPropertyDescriptor.value = function(...args:any[]) {
            console.log("Author:", data.author);
            if (isFound(data.capture, "ipaddress")) console.log("IP Address");
            if (isFound(data.capture, "starttime")) console.log("Start Time");
            if (isFound(data.capture, "endtime")) console.log("End Time");
            console.log("Hello Welcome to Decorators");
            let result = originalMethod.apply(this, args);
            // originalMethod.call(this, ...args);
            console.log("Leaving the original method");
            return result;
        }
        // console.log("I am leaving the log function");
        return typedPropertyDescriptor;
    }
}

class Banking {
    
    public currentBalance:number;

    constructor(currentBalance:number) {
        this.currentBalance = currentBalance
    }

    @log({
        author:"Peter Parker",
        capture:["ipaddress", "starttime", "endtime"]
    })
    public getCurrentBalance() {
        console.log("Current Balance:", this.currentBalance);
    }

    @log({
        author:"Peter Parker",
        capture:["ipaddress", "starttime", "endtime"]
    })
    public withdraw(amount:number):number {
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    }

    @log({
        author:"Peter Parker",
        capture:["ipaddress", "starttime", "endtime"]
    })
    public transfer(accountNumber:string, amount:number) {
        console.log("Acount Number:", accountNumber);
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    }

}

let banking = new Banking(4200);
banking.getCurrentBalance();
// console.log("Current Balance after withdraw:", banking.withdraw(500));
// console.log("Current Balance after transfer:", banking.transfer("ABC-123-456", 500));