import { MongoClient } from "mongodb";



const uri = 'mongodb+srv://ravis681299:96LAG5eCEWF6jcAB@cluster0.mongodb.net/?retryWrites=true&w=majority';

export const client = new MongoClient(uri)

export async function connectToDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db('myDB'); // Replace with your DB name
}

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


export const sendResponse = (req, res, statusCode, data, message) => {
    res.status(statusCode).json({
      success: true,
      message: message,
      data: data,
    });
}

export const sendError = (req, res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    message: message,
  })
}
