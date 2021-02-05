import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());
  it('renders a history list', () => {
    const { asFragment } = render(
      <HistoryList
        history={[]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
