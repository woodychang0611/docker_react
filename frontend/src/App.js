import React from 'react';
import HopefieldNetworkBlock from "./HopefieldNetwork/HopefieldNetworkBlock"
import UserList from "./UserList/UserList"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import fetchJsonData from "./Helper";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';

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
    let dateAddress = `${this.state.server_config.SERVER_URL}/GET/date/`
    let usersAddress = `${this.state.server_config.SERVER_URL}/GET/users/`

    fetchJsonData(dateAddress)
      .then(
        s => {
          this.setState({ var: s.date })
        }
      ).catch((error)=>{

      })

    fetchJsonData(usersAddress)
      .then(
        s => {
          this.setState({ users: s.users })
        }
      ).catch((error)=>{

      })
  }

  render() {
    let users = this.state.users
    const defaultTheme = createTheme();

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm" className="App" data-testid="App">
          <CssBaseline />
          <UserList userData={users} />
          <Typography component="h5" variant="h5" >
            Variable: {this.state.var}
          </Typography >
          <HopefieldNetworkBlock />
          <img src={logo} className="App-logo" alt="logo" />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
