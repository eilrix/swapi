import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import CharacterSearch from './CharacterSearch';

describe('CharacterSearch', () => {

  it("renders inputs", async () => {
    render(<CharacterSearch />);

    await screen.findByLabelText('Search');
  });
})