import React, { Component } from 'react'
import Like from './like'
import Share from './share'
import Stats from './stats'
import Comment from './comment'

export default class Reaction extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments : 100
    }
    this.changestats = this.changestats.bind(this)
  }
  changestats(){
    const newVal = this.state.comments 
    
    this.setState({
      comments:newVal + 1 
    })
  }
  render() {
    return (
      <div className='reactions'>
        <Like onClick={this.changestats}/>
        <Comment/>
        <Share/>
        <Stats comments={this.state.comments}/>
      </div>
    )
  }
}
