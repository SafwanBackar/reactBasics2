import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          first : 'second'
        }
        console.log('1st from B')
    }
    static getDerivedStateFromProps(props, state){
        console.log('2nd from B');
        return null
    }
    componentDidMount(){
        console.log('4th from B');
    }
  render() {
      console.log('3rd from B')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB