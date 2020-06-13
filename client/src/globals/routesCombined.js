import { homeRoutes } from 'globals/homeRoutes';
import { authRoutes } from 'globals/authRoutes';

export const routes = [...authRoutes, ...homeRoutes];
