const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
//const uri = "mongodb+srv://root:example@127.0.0.1?retryWrites=true&w=majority";
const uri = "mongodb://root:example@127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {

      let data = {
        my_data:"my data value",
        current_date:new Date()
      }
      // Establish and verify connection
      db = await client.db("admin").command({listDatabases:1})
      console.log(db)
      await client.db("test_db").collection('test_collection').insertOne(data)
      result = await client.db("test_db").collection('test_collection').findOne()
      console.log(result)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);