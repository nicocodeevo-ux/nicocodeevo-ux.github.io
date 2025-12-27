import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/nicocodeevo-ux/i)).toBeInTheDocument();
});


