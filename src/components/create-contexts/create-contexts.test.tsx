import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateContexts from './CreateContexts';

describe('<CreateContexts />', () => {
  test('it should mount', () => {
    render(<CreateContexts />);
    
    const createContexts = screen.getByTestId('CreateContexts');

    expect(createContexts).toBeInTheDocument();
  });
});