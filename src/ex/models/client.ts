import { Contract } from '../../lib/Contract';
import { ModelBase } from './model-base';

export class Client extends ModelBase {
	private _id: number;
	private _name: string;
	private _email: string;
	private _password: string;
	private _confirmPassword: string;
	private _profileUrl: string;
	private _securityNumber: number;

	public constructor(
		id: number,
		name: string,
		email: string,
		password: string,
		confirmPassword: string,
		profileUrl: string,
		securityNumber: number
	) {
		super();
		this._id = id;
		this._name = name;
		this._email = email;
		this._password = password;
		this._confirmPassword = confirmPassword;
		this._profileUrl = profileUrl;
		this._securityNumber = securityNumber;
		this.Validate();
	}

	public get Id() {
		return this._id;
	}

	public set Id(id: number) {
		this._id = id;
	}

	public get name() {
		return this._name;
	}

	public set name(name: string) {
		this._name = name;
	}

	public get email() {
		return this.email;
	}

	public set email(email: string) {
		this._email = email;
	}

	public get password() {
		return this._password;
	}

	public set password(password: string) {
		this._password = password;
	}

	public get confirmPassword() {
		return this._confirmPassword;
	}

	public set confirmPassword(confirmPassword: string) {
		this._confirmPassword = confirmPassword;
	}

	public get profileUrl() {
		return this._profileUrl;
	}

	public set profileUrl(profileUrl: string) {
		this._profileUrl = profileUrl;
	}

	public get securityNumber(): number {
		return this._securityNumber;
	}

	public set securityNumber(securityNumber: number) {
		this._securityNumber = securityNumber;
	}

	Validate() {
		const contract = new Contract()
			.IsNotNull(this._id, 'id', 'Id should not be null')
			.IsBiggerThan(this._id, 1, 'id', 'Id should be bigger than 0')
			.IsNotNullOrEmptyString(this._name, 'name', 'Name should not be null or empty')
			.IsLengthBetweenMaxMin(this._name, 15, 3, 'name', 'Name must have at least 3 characteres and maximum of 15')
			.IsNotNullOrEmptyString(this._password, 'password', 'Passwors is mandatory')
			.AreEquals(
				this._password,
				this._confirmPassword,
				'confirmPassword',
				'The password and confirm password must be the same'
			)
			.IsNotNullOrEmptyString(this._profileUrl, 'profileUrl', 'The profile URL is mandatory')
			.IsUrl(this._profileUrl, 'profileUrl', 'The profile must be a valid url')
			.IsBiggerThan(this._securityNumber, 1, 'securityNumber', 'The security number must be bigger than 0')
			.IsEmail(this._email, 'email', 'The format is not a valid format for email');

		this.Valid = contract.Valid;
		this.Notifications = contract.Notifications;
	}
}
