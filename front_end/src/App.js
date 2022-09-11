import logo from './logo.svg';
import React from 'react';
import './App.css';


class App extends React.Component {
  read_date(){
    var self=this;  
    fetch('http://localhost:3000/date' 
    
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        self.setState({
          date:myJson.date
        })
      });
  }

  constructor(props){
    super(props)
    this.state={
      env_var:this.props.env_var
    }

}

  render() {
    setTimeout(this.read_date.bind(this), 1000);

    return (
      <div className="App">
      <header className="App-header">
        <h1>Environment Variable: {this.state.env_var}</h1>
        <h1>{this.state.date}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    );
}

}

export default App;
