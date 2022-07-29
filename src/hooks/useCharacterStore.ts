import { useEffect, useState } from 'react';
import queryString from 'query-string';

import { CharactersData, CharacterStore } from '../types';
import { searchPeople } from '../utils/swapi';

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
            if (!initial?.characters) {
                const query = queryString.parse(window.location.search);
                if (query.search) setLastQuery(query.search as string);

                setLoading(true);
                const data = await searchPeople((query.search as string) || '',
                    parseInt((query.page || 1) as string));
                setCharacters(data);
                setLoading(false);
            }
        })();
    }, []);

    return {
        characters, setCharacters, loading, setLoading, lastQuery, setLastQuery,
    }
}