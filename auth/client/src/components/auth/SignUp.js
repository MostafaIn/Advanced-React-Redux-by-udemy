import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';
import '../../styles.css';

class SignUp extends Component {
    onSubmit = formProps => {
        this.props.signUp(formProps, ()=>{
            this.props.history.push('/feature')
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="signup">
                <fieldset>
                    <label>Email :</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password :</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMsg}</div>

                <button>Sign Up!</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMsg: state.auth.errorMsg
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(SignUp);