const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/mydatabase`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    // Perform actions on the collection object
  } finally {
    await client.close();
  }
}
run().catch(console.dir);