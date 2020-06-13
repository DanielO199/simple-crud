import { observable, action, decorate } from 'mobx';
import APIs from 'api';

class UsersStore {
	loading = true;
	usersList = [];
	user = {};
	alert = '';

	fetchUsers() {
		this.loading = true;
		APIs.users
			.getUsers()
			.then((response) => {
				this.usersList = response.users;
			})
			.catch((error) => {
				this.alert = error;
			})
			.finally(() => {
				this.loading = false;
			});
	}

	fetchUser(id) {
		this.loading = true;
		APIs.users
			.getUser(id)
			.then((response) => {
				console.log(response);
				this.user = response.user;
			})
			.catch((error) => {
				this.alert = error;
			})
			.finally(() => {
				this.loading = false;
			});
	}

	addUser(data) {
		APIs.users
			.addUser(data)
			.then((response) => {
				console.log(response);
				this.alert = response.message;
			})
			.catch((error) => {
				this.alert = error;
			})
			.finally(() => {
				this.loading = false;
				setTimeout(() => {
					this.alert = '';
				}, 4000);
			});
	}

	updateUser(data) {
		APIs.users
			.updateUser(data)
			.then((response) => {
				console.log(response);
				this.alert = response.message;
			})
			.catch((error) => {
				this.alert = error;
			})
			.finally(() => {
				this.loading = false;
				setTimeout(() => {
					this.alert = '';
				}, 2000);
			});
	}

	deleteUser(id) {
		APIs.users
			.deleteUser(id)
			.then((response) => {
				console.log(response);
				this.usersList = this.usersList.filter((user) => user._id !== id);
				this.alert = response.message;
			})
			.catch((error) => {
				this.alert = error;
			})
			.finally(() => {
				this.loading = false;
				setTimeout(() => {
					this.alert = '';
				}, 2000);
			});
	}
}

decorate(UsersStore, {
	loading: observable,
	usersList: observable,
	user: observable,
	alert: observable,
	fetchUsers: action,
	fetchUser: action,
	addUser: action,
	updateUser: action,
	deleteUser: action
});

export default new UsersStore();
