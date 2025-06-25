import { PrismaClient } from "@prisma/client";


// const uri = 'mongodb://ravis681299:96LAG5eCEWF6jcAB@cluster0-shard-00-00.nsfqg.mongodb.net:27017,cluster0-shard-00-01.nsfqg.mongodb.net:27017,cluster0-shard-00-02.nsfqg.mongodb.net:27017/uvotake?ssl=true&replicaSet=atlas-nsfqg-shard-0&authSource=admin';
  //  MONGO_URI=mongodb://<username>:<password>@cluster0-shard-00-00.nsfqg.mongodb.net:27017,cluster0-shard-00-01.nsfqg.mongodb.net:27017,cluster0-shard-00-02.nsfqg.mongodb.net:27017/uvotake?ssl=true&replicaSet=atlas-nsfqg-shard-0&authSource=admin
// const uri = "mongodb+srv://ravis681299:96LAG5eCEWF6jcAB@cluster0.9bxb3v5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// console.log("bcjdf", uri);

export const prisma = new PrismaClient();


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
