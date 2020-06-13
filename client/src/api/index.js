import UsersApi from './users.api';
import ProductsApi from './products.api';
import AuthApi from './auth.api';

const APIs = {
	users: new UsersApi(),
	products: new ProductsApi(),
	auth: new AuthApi()
};

export default APIs;
