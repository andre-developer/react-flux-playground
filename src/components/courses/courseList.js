'use strict';

var Link = require('react-router').Link;
var React = require('react');
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');
var CourseStore = require('../../stores/courseStore');

var CourseList = React.createClass({

    deleteCourse: function (courseId, event) {
        event.preventDefault();
        CourseActions.deleteCourse(courseId);
        toastr.success('Course Deleted');
    },

    componentWillMount: function () {
        CourseStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CourseStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            courses: CourseStore.getAllCourses()
        });
    },

    render: function () {
        var getCourseRow = function (course) {
            return (
                <tr key={course.id}>
                    <td><Link to="manageCourse" params={{id: course.id}}>{course.id}</Link></td>
                    <td>{course.title}</td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>delete</a></td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Length</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(getCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = CourseList;