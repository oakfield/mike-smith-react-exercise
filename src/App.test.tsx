import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders who\'s my representative', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Who's My Representative?/i);
  expect(linkElement).toBeInTheDocument();
});
