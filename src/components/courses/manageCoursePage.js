'use strict';

var React = require('react');
var CourseForm = require('./courseForm');
var AuthorStore = require('../../stores/authorStore');
var CourseActions = require('../../actions/courseActions');
var CourseApi = require('../../api/courseApi');
var Router = require('react-router');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            course: {
                title: '', author: '', category: '', length: '', watchHref: ''
            },
            errors: {},
            availableAuthors: {}
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id;

        if (courseId) {
            this.setState({
                course: CourseApi.getCoursesById(courseId)
            });
        }

        this.setState({
            availableAuthors: this.getAvailableAuthors()
        });
    },

    getAvailableAuthors: function () {
        var authors = AuthorStore.getAllAuthors();
        return authors.map(function (author) {
            return {
                value: author.id,
                name: author.firstName + ' ' + author.lastName
            };
        });
    },

    setCourseState: function (event) {
        var name = event.target.name;
        var value = event.target.value;
        this.state.course[name] = value;
        this.setState({
            course: this.state.course
        });
    },

    validateCourse: function () {
        var formIsValid = true;

        this.state.errors = {};

        if (!this.state.course.title) {
            this.state.errors.title = 'Please add title';
            formIsValid = false;
        }

        if (!this.state.course.category) {
            this.state.errors.category = 'Please add category';
            formIsValid = false;
        }

        if (!this.state.course.length) {
            this.state.errors.length = 'Please add length';
            formIsValid = false;
        }

        if (!this.state.course.author) {
            this.state.errors.author = 'Please add author';
            formIsValid = false;
        }

        if (!this.state.course.watchHref) {
            this.state.errors.watchHref = 'Please add URL';
            formIsValid = false;
        }

        this.setState({
            errors: this.state.errors
        });

        return formIsValid;
    },

    saveCourse: function (event) {
        event.preventDefault();

        if (!this.validateCourse()) {
            return;
        }

        var selectedAuthor = AuthorStore.getAuthorById(this.state.course.author);

        var newCourse = {
            title: this.state.course.title,
            author: {
                id: this.state.course.author,
                name: selectedAuthor.firstName + ' ' + selectedAuthor.lastName
            },
            length: this.state.course.length,
            watchHref: this.state.course.watchHref,
            category: this.state.course.category
        };

        CourseActions.createCourse(newCourse);

        toastr.success('Course saved');
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <div>
                <h1>Manage course</h1>
                <CourseForm
                    course={this.state.course}
                    onChange={this.setCourseState}
                    availableAuthors={this.state.availableAuthors}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = ManageCoursePage;