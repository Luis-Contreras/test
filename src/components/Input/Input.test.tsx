import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { act } from 'react';  // Importar `act` desde `react`

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Name" value="" onChange={() => {}} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('renders input with placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const handleChange = jest.fn();

    act(() => {
      render(<Input value="" onChange={handleChange} />);
    });

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'John' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
