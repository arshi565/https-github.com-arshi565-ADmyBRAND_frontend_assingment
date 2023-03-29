import { render, screen, fireEvent } from '@testing-library/react';
import LogicalOperators from './LogicalOperators';

describe('LogicalOperators component', () => {
  test('displays success message when both numbers are within range', () => {
    render(<LogicalOperators />);
    const input1 = screen.getByLabelText(/number 1/i);
    const input2 = screen.getByLabelText(/number 2/i);
    const button = screen.getByText(/submit/i);

    fireEvent.change(input1, { target: { value: '60' } });
    fireEvent.change(input2, { target: { value: '140' } });
    fireEvent.click(button);

    const message = screen.getByText(/success/i);
    expect(message).toBeInTheDocument();
  });

  test('displays error message when first number is too low', () => {
    render(<LogicalOperators />);
    const input1 = screen.getByLabelText(/number 1/i);
    const input2 = screen.getByLabelText(/number 2/i);
    const button = screen.getByText(/submit/i);

    fireEvent.change(input1, { target: { value: '30' } });
    fireEvent.change(input2, { target: { value: '140' } });
    fireEvent.click(button);

    const message = screen.getByText(/error/i);
    expect(message).toBeInTheDocument();
  });

  test('displays error message when second number is too high', () => {
    render(<Logical
