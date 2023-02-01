const { json } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

const users = [
    {
      id:1,
      firstName: "Sahid",
      lastName: "Kick",
      email: "sahid.kick@academlo.com",
      password: "root",
      age: 22
    }
]

let baseId = 2

app.get('/', (req, res) => {
    res.json({message: 'Server OK'})

})

app.get('/users', (req, res) => {
    res.json(users)

})

app.post('/users', (req, res) => {

    const data = req.body

    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    users.push(newUser)
    res.json(newUser)
    
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const data = users.find((item) => id === item.id)
    if(data){ 
    res.json(data)
    } else {
        res.status(200).json({
            message:'Invalid ID'
        })
    }

})

app.listen(9000, () => {
    console.log('Server started at port 9000')
})

module.exports = app


