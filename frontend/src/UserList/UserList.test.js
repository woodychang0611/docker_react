import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';


test('renders User List loading', () => {
    const { getByText } = render(<UserList />);
    const element = getByText('Loading');
    // Assert that the element with the expected text exists
    expect(element).toBeInTheDocument();
});

test('renders User List with data', () => {
    const users =
        [
            { name: "Bob", value: "Bob's value" },
            { name: "Tim", value: "Tim's value" },
            { name: "Jean", value: "Jean's value" }
        ]
    const { getByText } = render(<UserList userData={users}/>);
    const element = getByText('User List');
    // Assert that the element with the expected text exists
    expect(element).toBeInTheDocument();
});

