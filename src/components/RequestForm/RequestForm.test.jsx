import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RequestForm from '../RequestForm/RequestForm';


describe('RequestForm component', () => {
  afterEach(() => cleanup());
  it('renders request in the form', () => {
    const { asFragment } = render(
      <RequestForm
        url="http://"
        method="GET"
        body="{}"
        onSubmit={jest.fn()}
        onChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
