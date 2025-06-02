const api = (dbh) => {
  try {
    return dbh;
  } catch (error) {
    console.log("jknvfd", error);
  }
};
const inputvalue = "someValue";
// console.log("vnf", api(inputvalue));
const a = api()
console.log("sdfsd",a)

const addTwoNumber = (numone, numTwo) => {
  let sumAll = numone + numTwo;
  return sumAll;
};
console.log("sum", addTwoNumber(7, 7));


const sendResponse = (res, statusCode, data, message) => {
    res.status(statusCode).json({
      success: true,
      message: message,
      data: data,
    });
}

module.exports = {sendResponse};