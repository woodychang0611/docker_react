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

  componentDidMount() {
    console.log(`server_config: ${this.state.server_config}`)
    let dateAddress = `${this.state.server_config.SERVER_URL}/GET/date/`
    let usersAddress = `${this.state.server_config.SERVER_URL}/GET/users/`
    // setTimeout(() => {
    //   let userData =
    //     [
    //       { name: "Bob", value: "Bob's value" },
    //       { name: "Tim", value: "Tim's value" },
    //       { name: "Jean", value: "Jean's value" }
    //     ]
    //   this.setState({ userData: userData });
    // }, 1000);

    fetch(dateAddress)
      .then((response) => response.json())
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

    fetch(usersAddress)
      .then((response) => response.json())
      .then(
        s => {
          console.log(s.users)
          this.setState(
            {
              users: s.users
            }
          )
          console.log(this.state.users)
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
