import { render, screen } from '@testing-library/react';
import ResultsContainer from '../mainResult';



it('shows correct h2 text', () => {
  render(<ResultsContainer/>);
  const altText = screen.getByText(/Search results for:/i);
  expect(altText).toBeInTheDocument();
});