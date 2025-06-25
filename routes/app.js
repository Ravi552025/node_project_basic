import express from "express";
import { v4 as uuidv4 } from 'uuid';
import {sendError, sendResponse} from "../src/function.js";
import { prisma } from "../src/function.js";

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

router.get('/getUsers', async(req, res) => {
  try {
    const users = await prisma.user_info.findMany()

    return sendResponse(req, res, 200, users, 'All user fetch successfully')
  } catch (error) {
    return sendError(req, res, 500, error?.message)
  }
})

router.get('get-user-data/:userId', async(req, res) => {
  try {
    const {userId} = req?.params
   const fetchUser = await prisma.user_info.findFirst({
    where: {
      id: userId
    }
   })
   return sendResponse(req, res, 200, fetchUser, 'user fetch successfully' )
  } catch (error) {
    return sendError(req, res, 500, error.message)
  }
})

router.post('/add-user-info', async (req, res) => {
  try {
    
    const result = await prisma.user_info.create({
      data: req.body
    });
    
    return sendResponse(req, res, 200, result, "Data inserted successfully!");
  } catch (error) {
    console.error('Error inserting user:', error);
    return sendError(req, res, 500, error?.message);
  }
});

router.get('/getUsers', async(req, res) => {
  const users = await prisma.user_info.findMany();

  return sendResponse(req, res, 200, users, "User Fetch Successfully")
})

router.get('/getUserInfo/:userId', async(req, res) => {
  console.log("nbfdbsjkfbkjdsb");
  
  try {
    
 
  const { userId } = req.params;

  const user = await prisma.user_info.findFirst({
    where:{
      id: userId
    }
  })
  console.log("fdfds",user);
  

  return sendResponse(req, res, 200, user, "Data fetched successfully")
   } catch (error) {
    console.log("dsfdsdsfvdc",error);
    
     return sendError(req, res, 500, error.message)
  }
})

router.delete('/deleteUser/:userId', async(req, res) => {
  const {userId} = req.params
  try {
    const user = await prisma.user_info.findFirst({
      where: {
        id: userId
      }
    })
    if (!user) {
      return sendError(req, res, 401, 'User not found!')
    }
   const deletedRecord = await prisma.user_info.delete({
         where: {
          id: userId
         }
    })
    return sendResponse(req, res, 200, deletedRecord, 'User deleted successfully!')

  } catch (error) {
     return sendError(req, res, 500, error.message)
  }
})

router.patch('/updateUserData/:userId', async(req, res) => {
  const {userId} = req.params
  try {
    const user = await prisma.user_info.findFirst({
      where: {
        id: userId
      }
     
    })
     if (!user) {
       return sendError(req, res, 404, 'User not found') 
      }
      const updateUser = await prisma.user_info.update({
        where: {
          id: userId
        },
        data: req?.body
      })
      return sendResponse(req, res, 200, updateUser, "user record updated successfully")
    
  } catch (error) {
    return sendError(req, res, 500, error?.message)
  }
})

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
