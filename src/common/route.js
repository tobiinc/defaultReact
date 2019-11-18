import { Poll } from '../components/Poll/';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: Poll,
      isIndex: true
    }
  ]
};
