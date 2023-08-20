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
    console.log(this.props.server_config.SERVER_URL)
  }

  fetchJsonData(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network not ok")
          }
          resolve(response.json());
        }
        ).catch((error) => {
          // Handle network errors or JSON parsing errors here
          reject(`Fetch error: ${error}`);
        });
    }
    )
  }



  componentDidMount() {
    console.log(`server_config: ${this.state.server_config}`)
    let dateAddress = `${this.state.server_config.SERVER_URL}/GET/date/`
    let usersAddress = `${this.state.server_config.SERVER_URL}/GET/users/`

    this.fetchJsonData(dateAddress)
      .then(
        s => {
          this.setState({ var: s.date })
        }
      )

    this.fetchJsonData(usersAddress)
      .then(
        s => {
          this.setState({ users: s.users })
        }
      )
  }

  render() {
    let users = this.state.users
    return (
      <div className="App">
        <header className="App-header">
          <UserList userData={users} />
          <h3>Variable: {this.state.var}</h3>
          <HopefieldNetworkBlock />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

}

export default App;
