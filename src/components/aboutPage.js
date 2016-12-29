'use strict';

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            alert('You\'re going to enter about page');
            callback();
        },

        willTransitionFrom: function (transition, component) {
            alert('You\'re about to leave the about page.');
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;
