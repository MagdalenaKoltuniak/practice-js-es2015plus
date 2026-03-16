import User from './User.js';

export default class Admin extends User {
	constructor(data) {
		super(data);
	}

	isPasswordCorrect() {
		return this.password.length >= 10;
	}
}
