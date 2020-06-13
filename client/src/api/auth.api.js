import { request } from './request';

const endpointBasePath = '/login';

export default class AuthApi {
	login(data) {
		return request(`${endpointBasePath}`, {
			method: 'POST',
			data: data
		});
	}
}
