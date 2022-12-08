const express = require('express')
const app = express()
const port = 3001
const db = require('./db/dbconnection')
const Category = require('./schemas/category')
const mongoose = require('mongoose');
const data = require('./json/data.json')


app.get('/getData', (req, res) =>  {
    console.log(data);
    res.send({
        data:data
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})