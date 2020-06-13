import { observable, action, decorate } from 'mobx';
import APIs from 'api';

class AuthStore {
	loading = true;
	token = null;
	user = {};
	alert = '';

	login(data) {
		APIs.users
			.login(data)
			.then((response) => {
				this.token = response.token;
				this.user = response.user;
			})
			.catch((err) => {
				this.alert = err.message;
			})
			.finally(() => {
				this.loading = false;
			});
	}

	logout() {
		this.token = null;
	}
}

decorate(AuthStore, {
	loading: observable,
	token: observable,
	user: observable,
	alert: observable,
	login: action,
	logout: action
});

export default new AuthStore();
