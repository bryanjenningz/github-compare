var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var Home = require('../components/home');
var PromptContainer = require('../containers/prompt-container');
var CompareContainer = require('../containers/compare-container');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="user1" header="First user" component={PromptContainer} />
      <Route path="user2/:user1" header="Second user" component={PromptContainer} />
      <Route path="compare/:user1/:user2" component={CompareContainer} />
    </Route>
  </Router>
);

module.exports = routes;
