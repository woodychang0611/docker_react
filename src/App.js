import logo from './logo.svg';
import React from 'react';
import './App.css';


class App extends React.Component {


  constructor(props){
    super(props)
    this.state={
      env_var:this.props.env_var
    }
}
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Environment Variable: {this.state.env_var}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    );
}

}

export default App;
