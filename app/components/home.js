var React = require('react');
var Link = require('react-router').Link;
var transparentBg = require('../styles').transparentBg;

function Home(props) {
  return (
    <div className="jumbotron text-center" style={transparentBg}>
      <h1>Compare Github users</h1>
      <p className="lead">Compare Github users to see who has more impressive Github stats.</p>
      <Link to="user1">
        <button className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </div>
  );
}

module.exports = Home;
