import { render, screen } from '@testing-library/react';
import CallResponse  from './CallResponse';

describe('CallResponse', () => {

    it('renders the provided method type text', () => {
        render(<CallResponse methodType='POST'/>) // default is GET, so using POST
        expect(screen.getByText('POST')).toBeInTheDocument();
    })

    it('renders the provided method type text as h2', () => {
        render(<CallResponse methodType='POST'/>) // default is GET, so using POST
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('POST');
    })
})