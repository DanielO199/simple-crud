import { observable, action, decorate } from 'mobx';
import APIs from 'api';

class ProductsStore {
	loading = true;
	products = [];

	fetchProducts() {
		APIs.products
			.getProducts()
			.then((response) => {
				this.products = [...response.products];
			})
			.catch((error) => {})
			.finally(() => {
				this.loading = false;
			});
	}
}

decorate(ProductsStore, {
	loading: observable,
	products: observable,
	fetchProducts: action
});

export default new ProductsStore();
