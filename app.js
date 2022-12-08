const express = require('express')
const app = express()
const port = 3001
const db = require('./db/dbconnection')
const mongoose = require('mongoose');
const { Schema } = mongoose;
var bodyParser = require('body-parser')

const schema = new Schema({ name: String, sectors: [{ type: Schema.Types.ObjectId, ref: 'Sector' }] });
const schema2 = new Schema({ name: String, subSectors: [{ type: Schema.Types.ObjectId, ref: 'Sector' }] });
const schema3 = new Schema({ name: String });
const schema4 = new Schema({ name: String, category: String, sector: String, subSector: String });

const Category = mongoose.model('Category', schema);
const Sector = mongoose.model('Sector', schema2);
const subSector = mongoose.model('Subsector', schema3);
const booking = mongoose.model('Booking', schema4);

const data = require('./json/data.json')
var jsonParser = bodyParser.json()

app.post('/save-category', jsonParser, async (req, res) => {

    console.log("req");
    console.log(req.body);

    let p = new Category(req.body);

    try {
        await p.save();
        res.send('Category saved successfully!')
    } catch (error) {
        res.send(error)
    }

})

app.post('/save-sector', jsonParser, async (req, res) => {

    console.log("req");
    console.log(req.body);

    let p = new Sector(req.body);

    try {
        await p.save();
        res.send('Sector saved successfully!')
    } catch (error) {
        res.send(error)
    }

})

app.post('/save-sub-sector', jsonParser, async (req, res) => {

    console.log("req");
    console.log(req.body);

    let p = new subSector(req.body);

    try {
        await p.save();
        res.send('Sub Sector saved successfully!')
    } catch (error) {
        res.send(error)
    }

})

app.get('/get-all-data', jsonParser, async (req, res) => {

    try {

        let data = await Category.find().populate('sectors');

        console.log("data");
        console.log(data);

        res.send({
            data:data,
            message:"Data found"
        })

    } catch (error) {
        
        res.send(error)
    }

})

app.post('/save-booking-details', jsonParser, async (req, res) => {

    console.log("req");
    console.log(req.body);

    let b = new booking(req.body);

    try {
        await b.save();
        res.send('Details saved successfully!')
    } catch (error) {
        res.send(error)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})