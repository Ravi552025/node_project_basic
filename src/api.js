const api = (dbh) => {
    try {
        return dbh;
    } catch (error) {
        console.log("jknvfd",error);
        
    }
}
const inputvalue = "someValue"
console.log("vnf",api(inputvalue));

const addTwoNumber = (numone, numTwo) => {
   
    let sumAll = numone + numTwo;
    return sumAll
}
console.log("sum",addTwoNumber(7, 7));
