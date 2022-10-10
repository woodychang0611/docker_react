import logo from './logo.svg';
import React from 'react';
import './App.css';
import HopefieldNetworkBlock from "./HopefieldNetwork/HopefieldNetworkBlock"
import * as d3 from 'd3';

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
        var:this.props.var,
        server_config:this.props.server_config
      }
  }

  componentDidMount(){
    console.log(this.state.server_config)
    let address = `${this.state.server_config.SERVER_URL}/date/`
    fetch(address)
    .then((response) => response.json())
    .then(
      s=>{
        this.setState({
          var:s.date}
          )
      }
    )
  }

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <h3>Variable: {this.state.var}</h3>
        <HopefieldNetworkBlock/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    );
}

}

export default App;
