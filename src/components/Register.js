import React, { Component } from 'react';
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            phn: '',
            errors: {}
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            phn: this.state.phn

        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)

        })

    }

    render() {

        return (
            <div className="container">
                <div className="row" >
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"> Register </h1>
                            <div className="form-group">

                                <label htmlFor="UserName" > User Name  </label>
                                <input type="text" className="form-control"
                                    name="username"
                                  
                                    placeholder="Enter User Name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />

                            </div>
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
                            <div className="form-group">

                                <label htmlFor="Password2" > Confirm Password  </label>
                                <input type="password" className="form-control"
                                    name="password2"
                                    placeholder="Enter Password"
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group">

                                <label htmlFor="Phone" > Phone Number  </label>
                                <input type="text" className="form-control"
                                    name="phn"
                                    placeholder="Enter Phone Number"
                                    value={this.state.phn}
                                    onChange={this.onChange}
                                />

                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                       </button>
                        </form>
                    </div>

                </div>
            </div>
        )

    }
}

export default Register