'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>404 !!!</h1>
            </div>
        );
    }
});


module.exports = NotFound;
