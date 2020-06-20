import {Router} from './vaadin-router.js';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'nav-first'},
  {path: '/first',  component: 'nav-first'},
  {path: '/second', component: 'nav-second'},
  {path: '(.*)', component: 'nav-first'}
]);
