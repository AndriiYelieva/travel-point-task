import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';

describe("UserList component", () => {
  test('renders list', () => {
    render(<UserList />);

    screen.getByRole("list");
  });

  test('renders title', () => {
    render(<UserList />);

    const title = screen.getByText(/user list/i)

    expect(title).toBeInTheDocument();
  });
})