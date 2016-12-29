"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/aboutPage')} />
        <Route name="addAuthor" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="courses" handler={require('./components/courses/coursePage')} />
        <Route name="addCourse" handler={require('./components/courses/manageCoursePage')} />
        <Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage')} />
        <NotFoundRoute handler={require('./components/404')} />
    </Route>
);

module.exports = routes;