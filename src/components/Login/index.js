import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../actions"
import LoginForm from "./form"


class Login extends React.Component {

    login = (values) => {
       this.props.loginUser(values)
    };

    render() {
        return (
            <div className='login-container'>
                {localStorage.getItem('user') ? <Redirect to='/market'/> :
                 <LoginForm onSubmit={this.login} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginForm: state.main.loginForm
    }
};

const mapDispatchToProps = {
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


