import React from 'react'

class Counter extends React.Component{ constructor() {
    super()
    this.state={count:0}
}
    render () {
        return <div style={{color: this.props.color}}> <h1>Hello Class Component</h1> 
        <p> current count: {this.state.count}</p>
        <button onClick={() => 
            this.setState(
                { count : this.state.count + 1})}>
                    plus</button>
        <button onClick={() => 
            this.setState(
                { count : this.state.count - 1})}>
                    minus</button>
        
        </div>
    }
}
export default  Counter 
