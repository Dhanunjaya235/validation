import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sync from './Sync';

describe('<Sync />', () => {
  test('it should mount', () => {
    render(<Sync />);
    
    const sync = screen.getByTestId('Sync');

    expect(sync).toBeInTheDocument();
  });
});