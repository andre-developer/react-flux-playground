'use strict';

var React = require('react');
var CourseList = require('./courseList');
var Link = require('react-router').Link;
var CourseStore = require('../../stores/courseStore');


var CoursePage = React.createClass({
    getInitialState: function () {
        return {
            courses: CourseStore.getAllCourses()
        };
    },

    componentWillMount: function () {
        CourseStore.addChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
          courses: CourseStore.getAllCourses()
      });
    },

    render: function () {
        return (
            <div>
                <h1>Available courses</h1>
                <Link to="addCourse" className="btn btn-default btn-lg">Add course</Link>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }
});


module.exports = CoursePage;