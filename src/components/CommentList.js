import React, { Component } from 'react';
import { connect } from 'react-redux';
class CommentList extends Component {
    renderComments = () => {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }
    render() {
        return (
            <div>
                <h3>Comment List</h3>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(CommentList)