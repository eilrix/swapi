import React from 'react';

import { useCharacterStore } from '../hooks/useCharacterStore';
import { CharacterStore } from '../types';


export const CharacterContext = React.createContext<CharacterStore>({} as CharacterStore);

export function CharacterProvider({ children, initial }: { children: React.ReactNode; initial?: CharacterStore; }) {
  const store = useCharacterStore(initial);

  return (
    <CharacterContext.Provider value={store}>
      {children}
    </CharacterContext.Provider>
  )
}