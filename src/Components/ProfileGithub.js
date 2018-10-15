import React, { Component } from 'react'
import { connect } from 'react-redux';
import GithubRepo from './GithubRepos';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {


    render() {
        // console.log("From Profile", this.props.data);


        return (
            <div>
                <GithubRepo repos={this.props.data} />

            </div>
        )
    }
}
// ProfileGithub.propTypes = {
//     data: PropTypes.array.isRequired
// }
function mapStateToProps(state) {
    // console.log("state:::::", state);

    return {
        data: state.data
    }
}
export default connect(mapStateToProps)(ProfileGithub);