import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// const user = [];
let users = [];

router.get("/fetchAllUsers", (req, res) => {
  res.json({message: users})
})

router.post('/addUser', (req, res) => {
  try {
    
    const user = req.body
   
    console.log("bvjbfd",user);
    const existingEmail = users.find(u => u.email === user.email)
    if (existingEmail) {
      return res.status(409).json({message:"Email already exist!"})
    }
    users?.push({...user, id: uuidv4()})
    const userData = user.name
    res.json({message:`user ${userData} has been added successfully!`})
  } catch (error) {
    res.send(error.message)
  }
})

router.get("/fetchUser/:id", (req, res) => {
  try {
    
    const { id } = req.params;
    console.log("nvds",id);
    
    const foundUser = users?.find((user) => user.id === id);
    res.json({message:`user fetch ${foundUser} successfully`});
  } catch (error) {
     res.send(error.message)
  }
})

router.delete('/deleteUser/:id', (req, res) => {
  try {
    
    const { id } = req?.params;
    console.log(">>>>>>>>>",id);
    users = users.filter((user) => user.id !== id);
    const data = id;
    res.send({message:`${data} has been deleted successfully from record!`})
  } catch (error) {
    res.send(error.message)
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
  const finalResponse = id;
  res.json({message:`User ${finalResponse} has been updated`})
} catch (error) {
   res.send(error.message)    
}
})

export default router;
