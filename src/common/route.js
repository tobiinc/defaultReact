import {
    Catalog,
} from '../components/Catalog/';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: Catalog,
      isIndex: true
    }
  ]
};
