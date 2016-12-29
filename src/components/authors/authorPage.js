'use strict';

var React = require('react');
var AuthorList = require('./authorList');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var Link = require('react-router').Link;

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    render: function () {
        return (
            <div>
                <h1>Authors Test 1</h1>
                <Link to="addAuthor" className="btn btn-default btn-lg">Add author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;