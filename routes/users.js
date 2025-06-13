import express from "express";
import { v4 as uuidv4 } from 'uuid';
import {sendError, sendResponse} from "../src/function.js";
import {connectToDB} from "../src/function.js"

const router = express.Router();

// const user = [];
let users = [];

router.get("/fetchAllUsers", (req, res) => {
  return sendResponse(req, res, 200,  users, "user fetch successfully")
})

router.post('/addUser', (req, res) => {
  try {
    
    const user = req.body
   
    console.log("bvjbfd",user);
    const existingEmail = users.find(u => u.email === user.email)
    if (existingEmail) {
      return sendError(req, res, 409, `Email ${user.email} already exist!`)
    }
    users?.push({...user, id: uuidv4()})
    const userData = user;
    return sendResponse(req, res, 200, userData, 'user has been added successfully!')
  } catch (error) {
    return sendError(req, res, 500, error?.message)
  }
})

router.post('/add-user-info', async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection('user info'); // Your collection

    const user = req.body;

    const result = await collection.insertOne(user);
    return sendResponse(req, res, 200, result.insertedId);
  } catch (error) {
    console.error('Error inserting user:', error);
    return sendError(req, res, 500, "Failed to add user info" );
  }
});

router.get("/fetchUser/:id", (req, res) => {
  try {
    
    const { id } = req.params;
    console.log("nvds",id);
    
    const foundUser = users?.find((user) => user.id === id);
    return sendResponse(req, res, 200, foundUser, 'user fetch successfully')
  } catch (error) {
    return sendError(req, res, 500, error.message)
  }
})

router.delete('/deleteUser/:id', (req, res) => {
  try {
    
    const { id } = req?.params;
    console.log(">>>>>>>>>",id);
    users = users.filter((user) => user.id !== id);
    return sendResponse(req, res, 200, `${id} has been deleted successfully from record!`)
  } catch (error) {
    return sendError(req, res, 500, error.message)
  }
})

router.patch('/updateUser/:id', (req, res) => {
  try {
  const { id } = req.params;
  console.log("ncbds",id);
  const { name, age, email } = req.body;
  console.log("vcxzvc",name,age,email);
 let user = users.find((user) => user.id === id);

  if(name) user.name = name;
  if(age) user.age = age;
  if(email) user.email = email;

  return sendResponse(req, res, 200, id, `User ${id} has been updated`)
} catch (error) {
   return sendError(req, res, 500, error.message)    
}
})

export default router;
