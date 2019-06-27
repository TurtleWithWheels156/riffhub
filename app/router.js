import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('songs');
  this.route('edit-track', { path: '/:song_name'});
  this.route('settings');
});

export default Router;
