import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import CharacterSearch from './CharacterSearch';


describe('CharacterSearch', () => {

  it("renders inputs", async () => {
    render(<CharacterSearch />);

    await screen.findByLabelText('Search');
  });
})