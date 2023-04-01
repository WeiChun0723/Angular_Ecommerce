// javascript object we use {}

// no more let keyword and = will be replace with :
// x: 10
// sayhello: function() {}

type address = {
    street:string,
    state:string
}

type customer = {
    firstname:string,
    lastname:string,
    icNumber:number,
    products:string[],
    addresses:address[],
    display?:(x:number, y:number)=>void,
    print?:()=>()=>void
}

let khairi:customer = {
    firstname:"Khairi",
    lastname:"Abu Bakar",
    icNumber:720102121234,
    products:["Television", "Radio"],
    addresses:[
        {
            street:"Taman Serdang Perdana",
            state:"Selangor"
        },
        {
            street:"Taman Equine Park",
            state:"Selangor"
        }
    ],
    display: function(x:number, y:number) {
        console.log("First Name:", this.firstname);
        console.log("Last Name:", this.lastname);
        console.log(x, y);
    },
    print: function() {
        return () => {
            console.log("First Name:", this.firstname);
        }
    }
}

let john:customer = {
    firstname:"John",
    lastname:"David",
    icNumber:820102121234,
    products:["Computer", "Laptop"],
    addresses:[
        {
            street:"Taman Serdang Perdana",
            state:"Perak"
        },
        {
            street:"Taman Equine Park",
            state:"Kedah"
        }
    ]
}

if (khairi.display) khairi.display(10, 20);
if (khairi.print) khairi.print()();

if (khairi.display) khairi.display.call(john, 10, 20)
if (khairi.display) khairi.display.apply(john, [10, 20])
if (khairi.display) {
    let callmelater = khairi.display.bind(john);
    callmelater(10, 20);
}