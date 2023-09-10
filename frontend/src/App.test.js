import { render, screen } from '@testing-library/react';
import App from './App';
import UserList from './UserList/UserList';
import server_config from "../config/server_config.json"

test('renders learn react link', () => {
  render(<App server_config ={server_config}/>);
});
