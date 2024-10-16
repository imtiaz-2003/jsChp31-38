let rightNow = new Date()
document.getElementById("original").innerHTML = rightNow;

console.log(rightNow.getDay());

let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// console.log(daysName[rightNow.getDay()]);



// .....................................
// tell time function
function tellTime() {
    let now = new Date()
    let Hr = now.getHours();
    let Min = now.getMinutes();
    let sec = now.getSeconds();
    document.getElementById("output").innerHTML += "<br> You Clicked The Button @ " + Hr + ' : ' + Min + " : " + sec ;
}


// get Name of TODAY 
function getToday() {
    let rightNow = new Date()
    let theDay = rightNow.getDay();
    let NameOfDay = daysName[theDay]

    document.getElementById("output").innerHTML = NameOfDay;
    tellTime();
}

// calculate days passed 
function calDaysPassed() {
    let dob = document.getElementById("input").value;
    console.log(dob);
    if (!dob) {
        alert("please Enter your Date of Birth");
        return;
    }

    let toDay = new Date()
    let bornDate = new Date(dob)
    // console.log(toDay);
    // console.log(bornDate);

    let toDayTime = toDay.getTime()
    let bornDateTime = bornDate.getTime()
    // console.log(toDayTime);
    // console.log(bornDateTime);

    let msDiff = toDayTime - bornDateTime;
    console.log("msDiff ", msDiff);
    let daysDiff = msDiff / (1000 * 60 * 60 * 24);
    // console.log(daysDiff);
    // remove floating points using floor method 
    let html = Math.floor(daysDiff) + "  Days have been passed since you born "

    document.getElementById("output").innerHTML = html;
    tellTime();

}

// your next Birthday 
function nextBirthDay() {
    let dob = document.getElementById("input").value;
    console.log(dob);
    if (!dob) {
        alert("please Enter your Date of NextBirth Day");
        return;
    }

    let toDay = new Date()
    let nextBirthDate = new Date(dob)
    // console.log(toDay);


    let msDiff = nextBirthDate.getTime() - toDay.getTime();
    console.log("msDiff ", msDiff);
    let daysDiff = msDiff / (1000 * 60 * 60 * 24);
    // console.log(daysDiff);
    // remove floating points using floor method 
    let html = " Your Next birth Day is " + Math.floor(daysDiff) + "  Days Away "

    document.getElementById("output").innerHTML = html;
    tellTime()

}

// Greet User function 
function greetUser(userName) {

    let now = new Date();
    let hours = now.getHours();
    console.log(hours);
    let greetingMessage = "GOOD ";

    if (hours >= 4 && hours < 12) {
        greetingMessage += "Morning"

    }
    else if (hours >= 12 && hours < 17) {
        greetingMessage += "AfterNoon"
    }
    else if (hours >= 17 && hours < 20) {
        greetingMessage += "Evening"
    }
    else {
        greetingMessage += "Night"
    }


    document.getElementById("output").innerHTML = greetingMessage + " " + userName;
    

}
// greet user btn function with argument 
function GreetUserbtn() {
    let userName = prompt("Enter your Name");
    greetUser(userName);
    tellTime();

}

// tell time  functions
function tellTime1()
{
    tellTime()

}
function tellTime2()
{
    tellTime()

}

function tellTime3()
{
    tellTime()

}

// calculate tax functions
function calTaxBtn() {
    let price = +prompt("Please Enter Price");
    let taxRate = 17;
    let tax = calTax(price, taxRate);
    let html = "Tax: " + tax;
    document.getElementById("output").innerHTML = html;
}

function calTax(price, taxRate) {
    let tax = price * taxRate / 100;
    return tax;
}

// calculate total 
function calTotal(price) {
    let taxRate;
    if (price < 1000) {
        taxRate = 8;
    } else {
        taxRate = 16;
    }
    let tax = calTax(price, taxRate);
    let total = tax + price;
    return total;
}
// calculateTotalBtn function

function calculateTotalBtn() {
    let price = +prompt("Please Enter The Price");
    if (!price) {
        alert("You did not Enter Price");
        return;
    }
    let total = calTotal(price);
    let html = "Total: " + Math.round(total);
    document.getElementById("output").innerHTML = html;
}



// footer current year -------------
let now = new Date()
let year = now.getFullYear();
document.getElementById("year").innerHTML = year;

// clear input function 

// document.getElementById("clr").onclick = function(){
//     alert("input clr")
//     document.getElementById("input").innerHTML = " ";
// }

// clear functions

document.getElementById("ClearResult").onclick = function(){
    document.getElementById("output").innerHTML = " ";

} 


