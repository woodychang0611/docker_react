import logo from './logo.svg';
import React from 'react';
import './App.css';


function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
async function setData(x){
  return await resolveAfter2Seconds(x)
}

class App extends React.Component {

    constructor(props){
      super(props)
      this.state={
        var:this.props.var
      }
  }

  componentDidMount(){
    setData("New Value").then(
      s=>{
        this.setState({var:s})
      }
    )
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Variable: {this.state.var}</h1>
        <h1>{this.state.date}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    );
}

}

export default App;
