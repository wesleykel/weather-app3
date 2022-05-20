import { render, screen } from '@testing-library/react';
import Title from '.';


test('renders Page heading', () => {
  render(<Title/>);
  const title= screen.getByText("Weather App");
  expect(title).toBeInTheDocument();
});