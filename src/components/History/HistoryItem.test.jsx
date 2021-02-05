import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('renders a history item', () => {
    const { asFragment } = render(
      <HistoryItem
        id="1"
        method="GET"
        url="wwww.url.com"
        onChange={jest.fn()}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
