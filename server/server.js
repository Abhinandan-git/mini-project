const { MongoClient } = require('mongodb');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const uri = `mongodb+srv://practice_user:T0R9lDUGvtI6pxLs@practicedatacluster.cqvdh61.mongodb.net`;
// const uri = `mongodb+srv://practice_user:${process.env.PASSWORD}@practicedatacluster.cqvdh61.mongodb.net`;
const filter = {};
const projection = { '_id': 0 };

app.use(cors());

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get('/api/characters', async (req, res) => {
	try {
		await client.connect();
		console.log('Connected to MongoDB Atlas');
		
		// Connect to database
		const database = client.db('character');
		const collection = database.collection('details');

		// Query documents
		const result = await collection.find(filter, { projection }).toArray();
		res.json(result);
	} catch(e) {
		console.error('Error connecting to MongoDB Atlas', e);
	} finally {
		await client.close();
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});