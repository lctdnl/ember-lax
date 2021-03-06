import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo', function() {
    this.route('as-component');
    this.route('as-modifier');
    this.route('simple-1');
    this.route('simple-2');
    this.route('simple-3');
  });
});

export default Router;
