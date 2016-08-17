var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function getJson(url, cb) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', function() {
    cb(JSON.parse(req.response));
  });
  req.send();
}

function ProfilePic(props) {
  return (
    <div>
      <img src={props.imageUrl} style={{width: 100, height: 100}} />
      <div><a href={'https://www.github.com/' + props.username}>{props.username}</a></div>
      <div>{props.name}</div>
    </div>
  );
}

var ProfileStats = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6">
        <ProfilePic 
          imageUrl={this.props.user.imageUrl}
          username={this.props.user.username}
          name={this.props.user.name} />
        <div className="list-group">
          <div className="list-group-item">Username: {this.props.user.username}</div>
          <div className="list-group-item">Name: {this.props.user.name}</div>
          <div className="list-group-item">Public repo: {this.props.user.publicRepos}</div>
          <div className="list-group-item">Following: {this.props.user.following}</div>
          <div className="list-group-item">Followers: {this.props.user.followers}</div>
        </div>
      </div>
    );
  }
});

ProfileStats.propTypes = {
  user: PropTypes.object.isRequired
};

var CompareContainer = React.createClass({
  getInitialState: function() {
    return {
      user1: {},
      user2: {}
    };
  },
  componentDidMount: function() {
    [this.props.routeParams.user1, this.props.routeParams.user2].forEach(function(username, i) {
      getJson('https://api.github.com/users/' + username, function(userData) {
        this.setState({
          ['user' + (i+1)]: {
            imageUrl: userData.avatar_url,
            username: userData.login,
            name: userData.name,
            publicRepos: userData.public_repos,
            following: userData.following,
            followers: userData.followers
          }
        });
      }.bind(this));
    }.bind(this));
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h2>Comparison</h2>
        <ProfileStats user={this.state.user1} />
        <ProfileStats user={this.state.user2} />
        <Link to="/">
          <button className="btn btn-lg btn-success">Start Over</button>
        </Link>
      </div>
    );
  }
});

module.exports = CompareContainer;
