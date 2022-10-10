const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
//const uri = "mongodb+srv://root:example@127.0.0.1?retryWrites=true&w=majority";
const uri = "mongodb://root:example@127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ping:1});
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);