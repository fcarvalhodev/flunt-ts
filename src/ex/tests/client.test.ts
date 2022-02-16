import { Client } from '../models/client';

let client: Client;

beforeEach(() => {
	client = new Client(3, 'Myron B Dunn', 'myron@dunn.com', '111111', '111111', 'https://myron.dunn', 611476762);
});

describe('client tests should be valid', () => {
	test('a new client should be created', () => {
		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;

		//assert
		expect(result).toBe(true);
		expect(messagesLength).toBe(0);
	});
});

describe('id tests shloud be valid', () => {
	test('if id is equal to 0 client.valid should be false', () => {
		//arrange
		client.Id = 0;
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Id should be bigger than 0');
		expect(errorProperty).toBe('id');
	});
});

describe('email tests should be valid', () => {
	test('if email is empty model client should be valid', () => {
		//arrange
		client.email = '';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;

		//assert
		expect(result).toBe(true);
		expect(messagesLength).toBe(0);
	});

	test('if email is in a incorrect format, client.valid should be false', () => {
		//arrange
		client.email = 'b@myrondunn .com';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('The format is not a valid format for email');
		expect(errorProperty).toBe('email');
	});
});

describe('name tests should be valid', () => {
	test('if name is null should return an erro message and client.valid attribute should be false', () => {
		//arrange
		client.name = null;
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Name should not be null or empty');
		expect(errorProperty).toBe('name');
	});

	test('if name is empty should return an erro message and client.valid attribute should be false', () => {
		//arrange
		client.name = '';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Name should not be null or empty');
		expect(errorProperty).toBe('name');
	});

	test('if the name has less than 3 characteres, client.valid must be false.', () => {
		//arrange
		client.name = 'Wo';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Name must have at least 3 characteres and maximum of 15');
		expect(errorProperty).toBe('name');
	});

	test('if the name has more than 15 characteres, client.valid must be false.', () => {
		//arrange
		client.name = 'Wo';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Name must have at least 3 characteres and maximum of 15');
		expect(errorProperty).toBe('name');
	});
});

describe('password tests should be valid', () => {
	test('if password is null, should return an error and object.valid must be false', () => {
		//arrange
		client.password = null;
		client.confirmPassword = null;
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Passwors is mandatory');
		expect(errorProperty).toBe('password');
	});

	test('if password is different from confirm password and null, should return two errors', () => {
		//arrange
		client.password = null;
		client.confirmPassword = '123456';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessages = client.Notifications.map((err) => err.message);
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(2);
		expect(errorMessages[0]).toBe('Passwors is mandatory');
		expect(errorMessages[1]).toBe('The password and confirm password must be the same');
		expect(errorProperty).toBe('password');
	});

	test('if password is equals to confirmPassword, result should be valid.', () => {
		//arrange
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;

		//assert
		expect(result).toBe(true);
		expect(messagesLength).toBe(0);
	});
});

describe('profileURL test should be valid', () => {
	test('if profileURL is a URL, client should be valid', () => {
		//arrange
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;

		//assert
		expect(result).toBe(true);
		expect(messagesLength).toBe(0);
	});

	test('if profileURL is not an URL, client.valid should be false.', () => {
		//arrange
		client.profileUrl = 'as123zasw';
		client.Validate();

		//act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('The profile must be a valid url');
		expect(errorProperty).toBe('profileUrl');
	});
});
