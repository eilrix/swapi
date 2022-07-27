import { useEffect, useState } from 'react';

import { CharactersData, CharacterStore } from '../types';
import { getPeople } from '../utils/swapi';

/**
 * Used once in the app root 
 */
export function useCharacterStore(initial?: CharacterStore): CharacterStore {
    const [characters, setCharacters] = useState<CharactersData | undefined>(initial?.characters);
    const [loading, setLoading] = useState<boolean>(false);
    const [lastQuery, setLastQuery] = useState<string>();

    useEffect(() => {
        // Init store with data of the first page
        (async () => {
            setLoading(true);
            const data = await getPeople(1);
            setCharacters(data);
            setLoading(false);
        })();
    }, []);

    return {
        characters, setCharacters, loading, setLoading, lastQuery, setLastQuery,
    }
}