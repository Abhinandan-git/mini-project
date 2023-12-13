const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const main_app = express();
const uri = process.env.URL || '';
const port = process.env.PORT || 3001;

const material_input_app = express();
const material_port = process.env.MATERIALPORT || 3002;

const filter = {};
// Change here
const user_filter = { "username": "ABC", "password": "password" };
const projection = { '_id': 0 };

main_app.use(cors());
material_input_app.use(cors());
material_input_app.use(bodyParser.json());

const client = new MongoClient(uri);

// Connect to MongoDB when the application starts
async function connectMongoDB() {
	try {
		await client.connect();
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas', error);
	}
}

connectMongoDB();

// Routes for main_app
main_app.get('/api/material', async (req, res) => {
	try {
		const database = client.db('materials');
		const collection = database.collection('details');
		const result = await collection.find(filter, { projection }).toArray();
		res.json(result);
	} catch (error) {
		console.error('Error retrieving data from MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	}
});

main_app.get('/api/characters', async (req, res) => {
	try {
		const database = client.db('character');
		const collection = database.collection('details');
		const result = await collection.find(filter, { projection }).toArray();
		res.json(result);
	} catch (error) {
		console.error('Error retrieving data from MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	}
});

main_app.get('/api/weapons', async (req, res) => {
	try {
		const database = client.db('weapons');
		const collection = database.collection('details');
		const result = await collection.find(filter, { projection }).toArray();
		res.json(result);
	} catch (error) {
		console.error('Error retrieving data from MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	}
});

// Routes for material_input_app
material_input_app.post('/api/material-input', async (req, res) => {
	try {
		const database = client.db('data');
		const collection = database.collection('input');

		const received_data = req.body;
		const found_data = await collection.find(user_filter).toArray();

		if (found_data.length > 0) {
			const updateOperation = { $set: received_data };
			const result = await collection.updateMany(user_filter, updateOperation);
			console.log(`${result.modifiedCount} records updated successfully.`);
		} else {
			const insert_data = { ...received_data, ...user_filter };
			const result = await collection.insertOne(insert_data);
			console.log(`Record ${result.insertedId} created successfully.`);
		}

		res.status(201).json({ message: 'Data received and processed successfully', data: received_data });
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	}
});

main_app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

material_input_app.listen(material_port, () => {
	console.log(`Server running on port ${material_port}`);
});