import logo from './logo.svg';
import React from 'react';
import './App.css';
import HopefieldNetworkBlock from "./HopefieldNetwork/HopefieldNetworkBlock"
import UserList from "./UserList/UserList"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      var: this.props.var,
      userData: [],
      data: "old data",
      server_config: this.props.server_config
    }
  }

  componentDidMount() {
    console.log(this.state.server_config)
    let address = `${this.state.server_config.SERVER_URL}/GET/date/`

    setTimeout(() => {
      let userData =
        [
          { name: "Bob", value: "Bob's value" },
          { name: "Tim", value: "Tim's value" },
          { name: "Jean", value: "Jean's value" }
        ]
      this.setState({ userData: userData });
    }, 1000);

    fetch(address)
      .then((response) => {
        console.log('aaaaa')
        if (response.ok){
          throw new Error ('response not ok')
        }
        response.json()
      })
      .then(
        s => {
          this.setState({
            var: s.date
          }
          )
        }
      ).catch(error => {
        // Handle error
        s => {
          this.setState({
            var: "not found"
          }
          )
        }
      })

  }

  render() {

    let userData = this.state.userData
    return (
      <div className="App">
        <header className="App-header">
          <UserList userData={userData} />
          <h3>Variable: {this.state.var}</h3>
          <HopefieldNetworkBlock />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

}

export default App;
