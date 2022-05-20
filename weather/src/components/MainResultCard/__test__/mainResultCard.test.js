import { render, screen } from '@testing-library/react';
import ResultCard from '../mainResultsCard';


it('shows correct alt text', () => {
  render(<ResultCard />);
  const altText = screen.getByAltText(/weather/i);
  expect(altText).toBeInTheDocument();
});


