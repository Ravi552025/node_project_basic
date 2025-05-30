import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// const user = [];
let users = [
   
]



router.get("/fetchAllUsers", (req, res) => {
    res.send(users)
})

router.post('/addUser', (req, res) => {
    const user = req.body
    console.log("bvjbfd",user);
    const existingEmail = users.find(u => u.email === user.email)
    if (existingEmail) {
      return res.status(400).send("Email already exist!")
    }
    users?.push({...user, id: uuidv4()})
    res.send(`user ${user.name} has been added successfully!`)
})

router.get("/fetchUser/:id", (req, res) => {
  const { id } = req.params;
  console.log("nvds",id);
  
  const foundUser = users?.find((user) => user.id === id);
  res.send(foundUser);
})

router.delete('/deleteUser/:id', (req, res) => {
  const { id } = req?.params;
  console.log(">>>>>>>>>",id);
  

  users = users.filter((user) => user.id !== id);
  res.send(`${id} has been deleted successfully from record!`)
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

  res.send(`User ${id} has been updated`)
} catch (error) {
   res.send(error.message)    
}
})

export default router;
