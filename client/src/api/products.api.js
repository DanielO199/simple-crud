import { request } from './request';

const endpointBasePath = '/products';

export default class UsersApi {
	getProducts(params = {}) {
		return request(`${endpointBasePath}`, {
			method: 'GET',
			query: params
		});
	}

	addProduct(data) {
		return request(`${endpointBasePath}`, {
			method: 'POST',
			data: data
		});
	}

	updateProduct(params = {}) {
		return request(`${endpointBasePath}/${params['id']}`, {
			method: 'PATCH',
			data: params
		});
	}

	deleteProduct(id) {
		return request(`${endpointBasePath}/${id}/delete`, {
			method: 'DELETE'
		});
	}
}
