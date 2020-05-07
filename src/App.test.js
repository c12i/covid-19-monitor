import React from 'react';
import { render } from '@testing-library/react';
import FooterComponent from './components/footer/footer.component';

test('renders learn react link', () => {
  const { getByText } = render(<FooterComponent />);
  const linkElement = getByText(/Collins Muriuki/i);
  expect(linkElement).toBeInTheDocument();
});
