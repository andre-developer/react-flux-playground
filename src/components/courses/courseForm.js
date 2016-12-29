'use strict';

var React = require('react');
var TextInput = require('../../common/textInput');
var SelectInput = require('../../common/selectInput');

var CourseForm = React.createClass({
    render: function () {
        return (
            <form>
                <TextInput
                    name="title"
                    label="Title"
                    onChange={this.props.onChange}
                    value={this.props.course.title}
                    error={this.props.errors.title}
                />

                <SelectInput
                    name="author"
                    label="Authors"
                    onChange={this.props.onChange}
                    value={this.props.course.author.id}
                    options={this.props.availableAuthors}
                    error={this.props.errors.author}
                />

                <TextInput
                    name="category"
                    label="Category"
                    onChange={this.props.onChange}
                    value={this.props.course.category}
                    error={this.props.errors.category}
                />

                <TextInput
                    name="watchHref"
                    label="url"
                    onChange={this.props.onChange}
                    value={this.props.course.watchHref}
                    error={this.props.errors.watchHref}
                />

                <TextInput
                    name="length"
                    label="Length"
                    onChange={this.props.onChange}
                    value={this.props.course.length}
                    error={this.props.errors.length}
                />

                <input type="submit" value="save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;