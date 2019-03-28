import React, { Component } from 'react'
import remindfulApiService from '../services/remindful-api-service';
import TokenService from '../services/token-service'
import GoalsContext from '../context/GoalsContext'

class Account extends Component {
  static contextType = GoalsContext

  state = {
    deleted: false
  }

  deleteAccount = () => {
    this.context.clearError();
    remindfulApiService.deleteUser()
    .catch(res => {
      this.context.setError(res)
    })
    .then(TokenService.clearAuthToken())
      .then(this.context.deleteUser())
      .then(this.props.history.push('/account-deleted'))
  }
  render(){

    const token=TokenService.getAuthToken();

    if(token==='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1NTM4MTA5NjIsInN1YiI6InJlbWluZGZ1bFRlc3RAZ21haWwuY29tIn0.gF_NpZCP4jfoJIKPuPXFfvuq0cstHDgJLuvv2_aacik'){
      return(
        <div className="main">
          <div className="wrapper">
           <p className="description">We really like our test account, so we have limited what you can see on this page. If you really want to delete an account, go make one and come on back.</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main">
          <button className="textButton" onClick={() => this.deleteAccount()}>Delete my account</button>
        </div>
      )
    }
  }
}

export default Account;