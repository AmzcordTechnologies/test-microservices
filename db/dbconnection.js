// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.gceifuv.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected");
    } catch (error) {
        console.log("Not connected");
        console.log(error);
    }
}