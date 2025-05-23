import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const user = []
const users = [
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

    users.push({...user, id: uuidv4()})
    res.send(`user ${user.name} has been added successfully!`)
})

export default router;