import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
// import Card from 
const mockData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

describe('SearchBar Component', () => {
  test('input field updates value on change', () => {
    render(<SearchBar data={mockData} />);
    
    const input = screen.getByPlaceholderText('Enter the Name');
    expect(input).toBeInTheDocument()
  });

  test('check find button',()=>{
    render(<SearchBar data={mockData} />);
     const butt=screen.getByRole('button',{name:'Find'})
     expect(butt).toBeInTheDocument()
  });

  test('check specific user',()=>{
    render(<SearchBar data={mockData} />);
     const butt=screen.getByRole('button',{name:'Find'})
     const inp=screen.getByPlaceholderText('Enter the Name')
     fireEvent.change(inp, { target: { value: 'Leanne' } });
     fireEvent.click(butt)
     expect(screen.getByText(/Leanne/i)).toBeInTheDocument()
  })
  test('check for no match',()=>{
    render(<SearchBar data={mockData} />);
     const butt=screen.getByRole('button',{name:'Find'})
     const inp=screen.getByPlaceholderText('Enter the Name')
     fireEvent.change(inp, { target: { value: 'addkllkfdblkfbfbdkjah' } });
     fireEvent.click(butt)
     expect(screen.getByText(/No Match Found/i)).toBeInTheDocument()
  })
});
