import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import RequireAuth from 'components/RequireAuth';
class CommentBox extends Component {
    state = {
        comment: ''
    }

    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();

        // call an action creator
        // save the comment
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        })
    }
    render() {
        // console.log(this.state.comment)

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add a Comment</h3>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit</button>
                </div>
                <button className="fetch-comments" onClick={this.props.fetchComments}>fetch comments</button>
            </form>
        )
    }
}



export default connect(null, actions)(RequireAuth(CommentBox));