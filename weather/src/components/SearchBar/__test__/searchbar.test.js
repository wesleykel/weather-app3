import { render, screen } from '@testing-library/react';
import SearchBar from '../searchbar';




it('renders correct place-holder', () => {
  render(<SearchBar/>);
  const placeholder = screen.getByPlaceholderText("City");
  expect(placeholder).toBeInTheDocument();
});