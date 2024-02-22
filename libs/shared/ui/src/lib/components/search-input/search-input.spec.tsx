/* eslint-disable @typescript-eslint/no-empty-function */ import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './search-input';

describe('SearchInput component', () => {
  let handleChangeMock: (e: React.ChangeEvent<HTMLInputElement>) => void;

  beforeEach(() => {
    handleChangeMock = () => {};
    render(
      <SearchInput
        id="test"
        name="test"
        query=""
        data={[
          { name: 'Port A', code: 'A' },
          { name: 'Port B', code: 'B' },
        ]}
        handleChange={handleChangeMock}
        handleClick={() => {}}
        placeholder="Enter port name"
        onKeyDown={() => {}}
      />
    );
  });

  it('renders input component with placeholder', () => {
    const inputElement = document.querySelector(
      '[placeholder="Enter port name"]'
    );
    expect(inputElement).toBeTruthy();
  });

  it('displays results when typing in the input', () => {
    const inputElement = document.querySelector(
      '[placeholder="Enter port name"]'
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Port' } });
    const portAElement = document.querySelector('[data-testid="port-name-A"]');
    const portBElement = document.querySelector('[data-testid="port-name-B"]');
    expect(portAElement).toBeTruthy();
    expect(portBElement).toBeTruthy();
  });

  it('calls handleChange when input value changes', () => {
    const inputElement = document.querySelector(
      '[placeholder="Enter port name"]'
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Port' } });
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
