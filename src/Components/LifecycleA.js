import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          first : 'second'
        }
        console.log('1st')
    }
    static getDerivedStateFromProps(props, state){
        console.log('2nd');
        return null
    }
    componentDidMount(){
        console.log('4th');
    }
  render() {
      console.log('3rd')
    return (
      <div>
       <div>LifecycleA</div>
       <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA