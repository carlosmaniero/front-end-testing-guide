import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders the given value', () => {
    render(<Counter value={0} max={1} min={0} onChange={jest.fn()} />);

    const currentValueElement = screen.getByText('0');
    expect(currentValueElement).toBeInTheDocument();
  });

  it('sends an increment given the plus button is clicked', () => {
    const callback = jest.fn();
    render(<Counter value={0} max={1} min={0} onChange={callback} />);

    const button = screen.getByLabelText('Increase cart');
    button.click();

    expect(callback).toBeCalledWith(1);
  });

  it('decrements given the minus button is clicked', () => {
    const callback = jest.fn();
    render(<Counter value={1} max={1} min={0} onChange={callback} />);

    const button = screen.getByLabelText('Decrease cart');
    button.click();

    expect(callback).toBeCalledWith(0);
  });

  it('does not increments given it reach the max value', () => {
    const callback = jest.fn();
    render(<Counter value={1} max={1} min={0} onChange={callback} />);

    const button = screen.getByLabelText('Increase cart');
    button.click();

    expect(callback).not.toBeCalled();
  });

  it('does not decrements given it reach the min value', () => {
    const callback = jest.fn();
    render(<Counter value={0} max={1} min={0} onChange={callback} />);

    const button = screen.getByLabelText('Decrease cart');
    button.click();

    expect(callback).not.toBeCalled();
  });
});
