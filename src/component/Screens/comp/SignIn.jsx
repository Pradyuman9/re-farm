import React, { Component } from 'react'
import Axios from 'axios';

export default class SignIn extends Component {
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
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">

          <div className="login px-4 mx-auto mw-100">
            <h5 className="text-center mb-4">Login Now</h5>
            
              <div className="form-group">
                <label className="mb-2">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required="" onChange={this.onChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label className="mb-2">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="" required="" onChange={this.onChange}/>
              </div>
              <div className="form-check mb-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button onClick={()=>this.props.login(this.state)}  className="btn btn-primary submit mb-4">Sign In</button>
              <p className="text-center pb-4">
                <a href="#16" data-toggle="modal" data-target="#exampleModalCenter2"> Don't have an account?</a>
              </p>
            
          </div>
        </div>

      </div>
    </div>
  </div>
            
        )
    }
}
