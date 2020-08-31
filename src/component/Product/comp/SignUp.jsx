import React, { Component } from 'react'
import Axios from 'axios';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            details:[]
        }
        this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
       //  console.log(this.state)
      }
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="login px-4 mx-auto mw-100">
            <h5 className="text-center mb-4">Register Now</h5>
            <form>
              <div className="form-group">
                <label>First name</label>

                <input name="FirstName" type="text" className="form-control" id="validationDefault01" placeholder="" required=""  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input name="LastName" type="text" className="form-control" id="validationDefault02" placeholder="" required="" onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label className="mb-2">Email address</label>
                <input name= "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required="" onChange={this.onChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <label className="mb-2">Password</label>
                <input name = "password"type="password" className="form-control" id="password1" placeholder="" required="" onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input naem="passwordConfirm" type="password" className="form-control" id="password2" placeholder="" required="" onChange={this.onChange}/>
              </div>

              <button onClick={()=>this.props.signUp(this.state)} type="submit" className="btn btn-primary submit mb-4">Register</button>
              <p className="text-center pb-4">
                <a href="1#">By clicking Register, I agree to your terms</a>
              </p>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
            </div>
        )
    }
}
