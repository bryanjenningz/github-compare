var React = require('react');
var Prompt = require('../components/prompt');

var PromptContainer = React.createClass({
  getInitialState: function() {
    return {username: ''};
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username;
    if (username.length === 0) return;
    this.setState({username: ''});

    if (this.props.route.path === 'user1') {
      this.context.router.push('/user2/' + username);
    } else {
      this.context.router.push('/compare/' + this.props.routeParams.user1 + '/' + username);
    }
  },
  handleChangeUsername: function(e) {
    this.setState({username: e.target.value});
  },
  render: function() {
    return (
      <Prompt 
        header={this.props.route.header}
        username={this.state.username}
        onSubmit={this.handleSubmit}
        onChangeUsername={this.handleChangeUsername} />
    );
  }
});

module.exports = PromptContainer;
