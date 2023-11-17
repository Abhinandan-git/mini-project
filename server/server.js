const { MongoClient } = require('mongodb');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
console.log(process.env.KEY);
console.log(process.env.PORT);

const app = express();
const port = process.env.PORT || 3001;
const uri = process.env.URL || '';

const filter = {};
const projection = { '_id': 0 };

app.use(cors());

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get('/api/material', async (req, res) => {
	try {
		await client.connect();
		console.log('Connected to MongoDB Atlas');
		// Connect to database
		const database = client.db('materials');
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