import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sort from './Sort';

describe('Sort', () => {
  it('renders Sort component items', () => {
    render(<Sort />);
    expect(screen.getByText(/Sort by price:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/None/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ascending/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descending/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/none/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/ascending/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/descending/)).toBeInTheDocument();
  });
  it('Radio click', () => {
    const changeFilterHandler = jest.fn();
    const { container } = render(
      <input
        type='radio'
        name='ascending'
        value='ascending'
        onChange={changeFilterHandler}
      />
    );
    const radioButton = container.firstChild;
    expect(radioButton).not.toBeChecked();
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });
});
