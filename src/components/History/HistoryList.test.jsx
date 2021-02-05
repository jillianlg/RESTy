import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('renders a history item', () => {
    const { asFragment } = render(
      <HistoryList
        history={[]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});