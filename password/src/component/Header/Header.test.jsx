import Header from './Header'
import { render, screen } from '@testing-library/react';

describe("checking Header component", () => {
    test("checking Render", () => {
        render(<Header />);
        expect(screen.getByRole('heading', { name: /Change Your Password/i })).toBeInTheDocument();

    });

    test("checking Render", () => {
        render(<Header />);
        expect(
            screen.getByText(/Enter a new password below/i)
        ).toBeInTheDocument();
    })

})