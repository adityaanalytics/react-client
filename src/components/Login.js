import React, { Component } from 'react';
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }
    onSubmit(e) {

        e.preventDefault()

        const newUser = {
            email: this.state.email,
            password: this.state.password
         }

        login(newUser).then(res => {
            //this.props.history.push('/profile')
            this.props.history.push('/menu')

        })

    }

    render() {

        return (
            <div className="container">
                <div className="row" >
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"> Sign Up </h1>
                            
                            <div className="form-group">

                                <label htmlFor="Email" > Email Id  </label>
                                <input type="email" className="form-control"
                                    name="email"
                                    placeholder="Email Id"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">

                                <label htmlFor="Password" > Password  </label>
                                <input type="password" className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />

                            </div>
                            
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign In
                       </button>
                        </form>
                    </div>

                </div>
            </div>
        )

    }
}

export default Login