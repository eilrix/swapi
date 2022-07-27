import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import CharacterTable from './CharacterTable';
import { CharacterProvider } from '../../contexts/CharacterContext'

(global as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
  })
);

describe('CharacterTable', () => {

  it("renders rows", async () => {
    render(<CharacterProvider initial={{
      characters: {
        data: [
          {
            id: 'test1',
            name: 'test1',
          },
          {
            id: 'test2',
            name: 'test2',
          }
        ]
      }
    } as any}><CharacterTable /></CharacterProvider>);

    await screen.findByText('test1');
    await screen.findByText('test2');
  });
})