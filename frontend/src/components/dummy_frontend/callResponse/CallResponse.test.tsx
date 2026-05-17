import { render, screen } from '@testing-library/react';
import CallResponse  from './CallResponse';

describe('CallResponse', () => {

    it('renders the provided method type text', () => {
        render(<CallResponse methodType='POST'/>) // default is GET, so using POST
        expect(screen.getByText('POST')).toBeInTheDocument();
    })
})