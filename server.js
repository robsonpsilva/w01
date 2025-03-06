const {MongoClient} = require('mongodb');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");

async function main() {
	// we'll add code here soon
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    dotenv.config()
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4obvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

