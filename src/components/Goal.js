import React, {Component } from 'react'

export default class Goal extends Component{
  style = this.props.goal.complete ? 'line-through' : 'none currentcolor solid'

  redirect(goalId){
    this.props.history.push(`/my-goals/${goalId}`)
  }

  render(){

    return (
      <div className='goal' onClick={() => this.redirect(this.props.goal.id)}>
          <li style={{textDecoration: this.style}} ><p className="overflowEl">{this.props.goal.name}</p></li>
      </div>
    )
  }
} 