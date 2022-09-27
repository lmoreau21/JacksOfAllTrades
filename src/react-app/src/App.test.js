import { render, screen } from '@testing-library/react';
import MyApp from '/Users/alecp/JacksOfAllTrades/src/';
import App from './App';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
