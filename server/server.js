const { MongoClient } = require('mongodb');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
console.log(process.env.KEY);
console.log(process.env.PORT);

const app = express();
const port = process.env.PORT || 3002;

const uri = `mongodb+srv://practice_user:${process.env.KEY}@practicedatacluster.cqvdh61.mongodb.net`;
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