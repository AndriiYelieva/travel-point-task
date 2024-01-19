import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserList } from './UserList';

test('renders UserList component', () => {
  render(
    <BrowserRouter>
      <UserList />
    </BrowserRouter>
  );

  // Перевірка, чи відображається заголовок компонента
  const titleElement = screen.getByText(/UserList/i);
  expect(titleElement).toBeInTheDocument();

  // Додаткові перевірки, якщо потрібно
});
