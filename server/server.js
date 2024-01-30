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

const signup_app = express();
const signup_port = process.env.SIGNUPPORT || 3003;

const get_username_app = express();
const get_username_port = process.env.GETUSERNAMEPORT || 3004;

const filter = {};
// Change here
const user_filter = { 'username': 'ABC', 'password': 'password' };
const projection = { '_id': 0 };
const user_projection = { '_id': 0, 'username': 0, 'password': 0 };

main_app.use(cors());
signup_app.use(cors());
signup_app.use(bodyParser.text());
get_username_app.use(cors());
get_username_app.use(bodyParser.json());
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

async function getUsernames() {
	const database = client.db('data');
	const collection = database.collection('usernames');
	const result = await collection.find(filter, { projection }).toArray();
	return result;
}

async function updateUsernames(usernameArray) {
	const database = client.db('data');
	const collection = database.collection('usernames');

	try {
		const updateDocument = { $set: { usernames: usernameArray, }, };
		const result = await collection.updateOne(filter, updateDocument);
		if (result.modifiedCount > 0) {
			console.log(`Updated usernames in the database.`);
		} else {
			console.log(`No documents matched the filter criteria.`);
		}
	} catch (error) {
		console.error('Error updating usernames:', error);
	}
}


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

main_app.get('/api/material-input', async (req, res) => {
	try {
		const database = client.db('data');
		const collection = database.collection('input');
		let result = await collection.find(user_filter, { user_projection }).toArray();
		result = Object.values(result[0]).map(value => (value === null ? 0 : value)).filter(value => Number.isInteger(value));
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

// Routes for get_username_app
get_username_app.get('/api/usernames', async (req, res) => {
	const userArray = await getUsernames();
	res.json(userArray);
});

get_username_app.get('/api/accounts', async (req, res) => {
	try {
		const projection = {
			'_id': 0,
			'username': 1,
			'password': 1
		};
		const database = client.db('data');
		let collection = database.collection('input');

		const found_data = await collection.find(filter, { projection }).toArray();
		const convertedArray = found_data.reduce((acc, obj) => {
			const entries = Object.entries(obj).flat();
			entries.forEach((value, index) => {
				if (!acc[index]) acc[index] = [];
				if (index % 2 == 1) acc[index].push(value);
			});
			return acc;
		}, []).filter(arr => arr.length > 0);

		res.status(201).json(convertedArray);
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	};
});

// Routes for signup_app
signup_app.post('/api/signup', async (req, res) => {
	try {
		const database = client.db('data');
		let collection = database.collection('input');
		const [username, password] = req.body.split('|');
		let record = { 'username': username, 'password': password }
		for (let item = 1001; item <= 1332; item++) record[`input_${item}`] = 0
		await collection.insertOne(record);

		usernameArray = await getUsernames();
		usernameArray = usernameArray[0].usernames;
		usernameArray.push(username);
		await updateUsernames(usernameArray);

		res.status(201).json({ message: 'Data received and processed successfully', data: req.body });
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas', error);
		res.status(500).send('Internal Server Error');
	};
});

main_app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

material_input_app.listen(material_port, () => {
	console.log(`Server running on port ${material_port}`);
});

signup_app.listen(signup_port, () => {
	console.log(`Server running on port ${signup_port}`);
});

get_username_app.listen(get_username_port, () => {
	console.log(`Server running on port ${get_username_port}`);
});