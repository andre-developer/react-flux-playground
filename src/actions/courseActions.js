"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');


var CourseActions = {
    createCourse: function (course) {
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },

    deleteCourse: function (courseId) {
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: courseId
        });
    }
};

module.exports = CourseActions;