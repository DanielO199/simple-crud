import Login from 'views/Login';
import { RerouteLogged } from 'common/components';

export const homeRoutes = [{ path: '/login', component: RerouteLogged(Login) }];
