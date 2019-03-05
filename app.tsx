import * as React from 'react'
import Hello from "./hello";

type State = {
  clearAll: boolean | null
}

export default class App extends React.Component<any, State> {

  private hello: Hello | null = null;

  constructor(props: any) {
    super(props)
    this.state = {
      clearAll: null
    }
  }

  render() {
    return <div>
      <button onClick={this.clearAll}>Clear</button>
      <Hello ref={this.createRef}/>
    </div>
  }

  createRef = (hello: Hello) => {
    this.hello = hello;
  }

  clearAll = () => {
    this.hello && this.hello.clear();
  }

}
