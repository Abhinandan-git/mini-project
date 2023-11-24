const { MongoClient } = require('mongodb');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const main_app = express();
const port = process.env.PORT || 3001;
const uri = process.env.URL || '';

const material_input_app = express();
const material_port = process.env.MATERIALPORT || 3002;

const filter = {};
const projection = { '_id': 0 };

main_app.use(cors());
material_input_app.use(cors());

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

main_app.get('/api/material', async (req, res) => {
	try {
		await client.connect();
		console.log('Connected to MongoDB Atlas');
		// Connect to database
		const database = client.db('materials');
		const collection = database.collection('details');
		// Query documents
		const result = await collection.find(filter, { projection }).toArray();
		res.json(result);
	} catch (e) {
		console.error('Error connecting to MongoDB Atlas', e);
	} finally {
		await client.close();
	}
});

material_input_app.post('/api/material-input', async (req, res) => {
	const recieved_data = req.body;
	res.status(201).json({ message: 'Data received and processed successfully', data: recieved_data });
});

main_app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

material_input_app.listen(material_port, () => {
	console.log(`Server running on port ${material_port}`);
});