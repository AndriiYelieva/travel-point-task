import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { UserDetails } from './UserDetails';

describe('UserDetails component', () => {
  test('renders title', () => {
    render(<UserDetails />);

    const title = screen.getByText("User details")

    expect(title).toBeInTheDocument();
  });

  test('renders error message', async () => {
    render(<UserDetails />);

    await waitFor(() => {
      const error = screen.getByText(/loading user details/i)
      expect(error).toBeInTheDocument();
    });
  });
})