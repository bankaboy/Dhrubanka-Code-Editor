import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders the provided heading text', () => {
    render(<Heading headingText="Test heading text" />);
    
    expect(screen.getByText('Test heading text')).toBeInTheDocument();
  });

  it('renders an h2 with the correct text', () => {
    render(<Heading headingText="Test heading text" />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Test heading text');
  });
});