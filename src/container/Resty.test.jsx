import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Resty from './Resty';

describe('Resty container', () => {
  render(<Resty />);

  const urlInput = screen.getByPlaceholderText('URL');
  user.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1');

  return waitFor(() => {
    expect(screen.getByTestId('response')).not.toBeEmptyDOMElement;
  });
});
