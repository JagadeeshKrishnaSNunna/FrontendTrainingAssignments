import { render, screen } from '@testing-library/react';
import Password from './Password'

describe('password Component',()=>{
    test('checking inputs',()=>{
        render(<Password/>)
        expect(screen.getAllByPlaceholderText(/Enter New Password/i).length).toBe(2)
    })
})