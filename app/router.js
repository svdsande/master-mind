import EmberRouter from '@ember/routing/router';
import config from 'master-mind/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('number-code', { path: '/number' });
  this.route('color-code', { path: '/color' });
  this.route('color-setup');
  this.route('number-setup');
});
