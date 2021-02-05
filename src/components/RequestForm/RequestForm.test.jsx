import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RequestForm from '../RequestForm/RequestForm';


describe('RequestForm component', () => {
  afterEach(() => cleanup());
  it('renders request in the form', () => {
    const { asFragment } = render(
      <RequestForm
        onChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
