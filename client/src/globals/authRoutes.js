import AddProduct from 'views/AddProduct';
import AddUser from 'views/AddUser';
import UsersList from 'views/UsersList';
import ProductList from 'views/ProductList';
import UpdateUser from 'views/UpdateUser';
import { Protected } from 'common/components';

export const authRoutes = [
	{ path: '/users', component: Protected(UsersList) },
	{ path: '/products', component: Protected(ProductList) },
	{ path: '/user/:userId', component: Protected(UpdateUser) },
	{ path: '/new/user', component: Protected(AddUser) },
	{ path: '/product/new', component: Protected(AddProduct) }
];
