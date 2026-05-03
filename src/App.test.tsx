import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';

vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {
    workerSrc: '',
  },
  getDocument: vi.fn(),
}));

test('Отображает главный экран портала', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/ОНМУ/i);
  expect(brandElements[0]).toBeInTheDocument();

  
  const homeLink = screen.getByText(/Головна/i);
  expect(homeLink).toBeInTheDocument();
});


