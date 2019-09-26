import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions';
class CommentBox extends Component{
    state={
        comment:''
    }
    handleChange = event =>{
        this.setState({
            comment: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault();

        // call an action creator
        // save the comment
        this.props.saveComment(this.state.comment);
        this.setState({
            comment:''
        })
    }
    render(){
        // console.log(this.state.comment)
        
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Add a Comment</h3>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}
export default connect(null, actions)(CommentBox);