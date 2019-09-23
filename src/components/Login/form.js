import React from "react"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {renderInput} from "../Input"
import {logInValidator} from "../../utils/func/validator"
import {loginForm} from "../../utils/formFields/loginForm"

class LoginForm extends React.Component {

    render() {
        const {handleSubmit, invalid} = this.props;
        return (
            <>
                {localStorage.getItem('user') ? <Redirect to='/market'/> :
                    <form onSubmit={handleSubmit} className='login-form'>
                        {loginForm.map(el =>
                            <Field
                                key={el.name}
                                {...el}
                                component={renderInput}
                                inputClassName='login-input'
                                containerClassName='login-input-container'
                            />
                        )}
                        <button disabled={invalid} type="submit" id={invalid ? 'login-submit-disabled' : null} className='login-submit'>Submit</button>
                    </form>

                }
            </>
        );
    }
}


export default reduxForm({
    form: 'login',
    validate: logInValidator,
})(LoginForm)
