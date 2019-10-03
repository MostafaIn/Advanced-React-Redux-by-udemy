import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavAway()
        }
        componentDidUpdate() {
            this.shouldNavAway()
        }
        shouldNavAway() {
            if (!this.props.auth) {
                this.props.history.push('/')
                console.log('I need to leave!!!')
            }
        }
        render() {
            return <ChildComponent {...this.props} />
        }
    }
    const mapStateToProps = state => {
        return { auth: state.auth.authenticated }
    };
    return connect(mapStateToProps)(ComposedComponent);
}