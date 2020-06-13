const User = require('../models/user');

const getAllUsers = async (req, res) => {
	let users;
	try {
		users = await User.find({});
	} catch (err) {
		return res.status(500).json({ message: 'Fetching users failed' });
	}

	res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const getUserById = async (req, res) => {
	const userId = req.params.uid;

	let user;
	try {
		user = await User.findById(userId);
	} catch (err) {
		res.status(500).json({ message: 'Fetching user failed' });
	}

	return res.json({ user: user.toObject({ getters: true }) });
};

const createUser = async (req, res) => {
	const { name, surname, address, email, phone } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		return res.status(500).json({ message: 'Signing up failed' });
	}

	if (existingUser) {
		return res.status(409).json({ message: 'User already exists' });
	}

	let createdUser = new User({
		name,
		surname,
		address,
		email,
		phone
	});

	try {
		await createdUser.save();
	} catch (err) {
		return res.status(500).json({ message: 'Signing up failed' });
	}

	res.status(201).json({
		message: 'User succesfully created',
		createdUser
	});
};

const updateUser = async (req, res) => {
	const { name, surname, address, phone } = req.body;

	const userId = req.params.uid;

	let updatedUser;
	try {
		updatedUser = await User.findById(userId);
	} catch (err) {
		return res.status(500).json({ message: 'Could not update user' });
	}

	updatedUser.name = name;
	updatedUser.surname = surname;
	updatedUser.address = address;
	updatedUser.phone = phone;

	try {
		await updatedUser.save();
	} catch (err) {
		return res.status(500).json({ message: 'Could not update user' });
	}

	res
		.status(200)
		.json({
			message: 'User updated',
			user: updatedUser.toObject({ getters: true })
		});
};

const deleteUser = async (req, res) => {
	const userId = req.params.uid;

	let user;
	try {
		user = await User.findById(userId);
	} catch (err) {
		return res.status(500).json({ message: 'Could not delete user' });
	}

	if (!user) {
		return res.status(404).json({ message: 'Could not find user' });
	}

	try {
		await User.deleteOne({ _id: userId });
	} catch (err) {
		return res.status(500).json({ message: 'Could not delete user.' });
	}

	res.status(200).json({ message: 'User deleted.' });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
