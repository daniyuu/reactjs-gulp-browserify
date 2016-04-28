/**
 * Created by v-yueych on 4/21/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Child = React.createClass({
    render: function () {
        return (
            <div>
                And this is the test dsasd test trts <b>{this.props.name}</b>.
            </div>
        )
    }
});

module.exports = Child;