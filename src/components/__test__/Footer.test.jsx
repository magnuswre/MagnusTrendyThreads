import { render, screen } from '@testing-library/react';
import Footer from '../Footer';


describe('Footer', () => {
  test('renders text', () => {
    render(<Footer />);
    const headingElement = screen.getByText('@Magnus 2023');
    expect(headingElement).toBeInTheDocument();
  });
});
