import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Route, Link } from 'react-router-dom';

class App extends Component {
    renderButton(){
        if(this.props.auth){
            return <button>sign out</button>
        }else{
            return <button>sign in</button>
        }
    }
    renderHeader(){
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    render() {
        return (
            <div>
            {this.renderHeader}
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </div>
        )
    }

};

const mapStateToProps = state =>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)
