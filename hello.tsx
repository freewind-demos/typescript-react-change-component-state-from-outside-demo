import * as React from 'react'

type State = {
  count: number
}

export default class Hello extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    }

  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  clear = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return <div>
      <span>Count: {this.state.count}</span>
      <button onClick={this.increase}>+1</button>
    </div>
  }

}
