import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ResponseDisplay from './ResponseDisplay';


describe('ResponseDisplay component', () => {
  afterEach(() => cleanup());
  it('renders a response in the display', () => {
    const { asFragment } = render(
      <ResponseDisplay
        onChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
