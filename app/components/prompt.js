var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var Prompt = React.createClass({
  componentDidMount: function() {
    this.input.focus();
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <input
                ref={(node) => { this.input = node; }}
                onChange={this.props.onChangeUsername}
                className="form-control"
                placeholder="Github username"
                value={this.props.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
