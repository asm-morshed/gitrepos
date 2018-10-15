import React, { Component } from 'react'
import { getGitList } from '../actions/userName';
import { connect } from 'react-redux';
class UserName extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        const gitName = {
            name: this.state.name
        }

        // console.log(this.props);
        this.props.getGitList(gitName);

    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="github user name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default connect(null, { getGitList })(UserName);