'use strict';

var React = require('react');

var SelectInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    getOptionElement: function (options) {
        return (
            <option key={options.value} value={options.value}>{options.name}</option>
        );
    },

    render: function () {
        var wrapperClassName = 'form-group';

        if (this.props.error && this.props.error.length > 0) {
            wrapperClassName += ' has-error';
        }

        return (
            <div className={wrapperClassName}>
                <label>{this.props.label}</label>
                <select className="form-control" onChange={this.props.onChange} name={this.props.name} value={this.props.value}>
                    <option></option>
                    {this.props.options.map(this.getOptionElement, this)}
                </select>
                <div className="input">{this.props.error}</div>
            </div>
        );
    }
});


module.exports = SelectInput;