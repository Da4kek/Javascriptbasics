function greeting(name){
    if(name == undefined){
        console.log('you haven\'t entered any name');
    }
    else {
        console.log('hello there '+name);
    }
}


function Sample(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing sample..");
    }
}
const sample = new Sample(1);

const person = {
    firstname: "yes",
    lastname: "no",
    get fullName(){
        return `${person.firstname} and ${person.lastname}`
    },
    set fullName(value){
        const parts  = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

person.fullName = "hello how";

const bank = {
    name: "Steve Jobs",
    balance: 1000,
    withdrawed: 100,
    deposital: 100,
    get Withdraw(){
        if(bank.withdrawed >= bank.balance){
            return `cant take ${bank.withdrawed} from your balance ${bank.balance}`
        }
        else {
            bank.balance = bank.balance-bank.withdrawed
            return `success your balance is now: ${bank.balance}`
        }
    },
    get Deposit(){
        if(bank.deposital>= bank.balance){
            return `can't deposit ${bank.deposital}. That's too much, \nlimit:50 per transaction`
        }
        else {
            bank.balance = bank.balance + bank.deposital
            return `success your balance is now: ${bank.balance}`
        }
    },
    set Withdraw(value){
        this.withdrawed = value;
    },
    set Deposit(value){
        this.deposital = value;
    }
}

bank.deposital = 50; 

//value types: number, string, boolean, symbol, undefined, null
//reference types: object, function, array
//primitives:
let x = {value:10};
let y = x;
x.value = 30;

let number = {value:10};
function increase(number){
    number.value++;

}
increase(number);

//primitives are copied by values
//objects are copied by their reference

var color = 'red';
let age = 10

//cloning go brr

const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
}
// const another = {};
// for(let key in circle){
//     another[key] = circle[key];
//}

const another = Object.assign({color: 'yellow'},circle)

//const another = {...circle};
console.log(another)
console.log(circle)
