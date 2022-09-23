const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const dotenv = require("dotenv");
dotenv.config();


const app = express();
const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());

//connection for database

const uri =process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
                                                                                                                                                                         








//it start listen to the server
app.listen(port,() => {
    console.log('Server is running on port : ' + port);
});