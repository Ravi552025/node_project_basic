import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const user = [];
let users = [
    {
    name: "Ravi",
    age: 23,
    email: "ravi123@gmail.com"
},
{
    name: 'Singh',
    age: 44,
    email: 'singh@123gmail.com'
}
]

router.get("/", (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body
    console.log("bvjbfd",user);


    users?.push({...user, id: uuidv4()})
    res.send(`user ${user.name} has been added successfully!`)
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("nvds",id);
  
  const foundUser = users?.find((user) => user.id === id);
  res.send(foundUser);
})

router.delete('/:id', (req, res) => {
  const { id } = req?.params;
  console.log(">>>>>>>>>",id);
  

  users = users.filter((user) => user.id !== id);
  res.send(`${id} has been deleted successfully from record!`)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  console.log("ncbds",id);
  const { name, age, email } = req.body;
  console.log("vcxzvc",name,age,email);
  users = users.find((user) => user.id === id);

  if(name) user.name = name;
  if(age) user.age = age;
  if(email) user.email = email;

  res.send(`user with the ${id} has been updated!`)
})

export default router;
