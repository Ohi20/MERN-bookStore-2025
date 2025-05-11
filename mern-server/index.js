const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 8000;

// IgoA0HSLg4cSOSd6

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// mongodb configuration

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbuser:IgoA0HSLg4cSOSd6@cluster0.mpgfb3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection
    const bookCollections = client.db("BookInventory").collection("books");

    // insert a book to the collection
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
