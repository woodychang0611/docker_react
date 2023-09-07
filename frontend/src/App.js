import React from 'react';
//import './App.css';
import HopefieldNetworkBlock from "./HopefieldNetwork/HopefieldNetworkBlock"
import UserList from "./UserList/UserList"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    const defaultTheme = createTheme();

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className="App">
          <CssBaseline />
          <UserList userData={users} />
          <Typography component="h1" variant="h5" >
            Variable: {this.state.var}
          </Typography >

          <HopefieldNetworkBlock />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
