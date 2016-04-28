/**
 * Created by v-yueych on 4/21/2016.
 */

var Child = require('./Child');

var Parent = React.createClass({
    render: function () {
        return (
            <div>
                <div> This is the parent.</div>
                <Child name="child"/>
                <Child name="child"/>
                <Child name="child"/>

            </div>
        )
    }
});

module.exports = Parent;

