import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import server_config from "../config/server_config.json"

test('renders App', () => {
  const { getByText } = render(<App server_config={server_config} />);
  const h1Element = getByText('App');
  // Assert that the element with the expected text exists
  expect(h1Element).toBeInTheDocument();
});

