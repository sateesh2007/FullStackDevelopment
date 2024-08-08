import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "Mouritech" };
    this.changeState =
      this.changeState.bind(this)
  }
  render() {
    return (
      <div>
        <h1>React Js Component's Lifecycle</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here!</button>
 
      </div>
    )
  }
  componenetWillMount() {
    console.log('Component Will MOUNT!')
  }
  componenetDidMount() {
    console.log('Component Did MOUNT!')
  }
  changeState() {
    this.setState({ hello: "All!- React Life Cycle" });
  }
  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props')
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component Will UNMOUNT!')
  }
}
export default App