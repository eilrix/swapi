import { useCallback, useContext, useEffect, useState } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';
import { searchPeople } from '../utils/swapi';


export function useCharacterSearch() {
    const context = useContext(CharacterContext);

    const search = useCallback(async (query: string, pageNumber: number) => {
        if (query == context.lastQuery) return;
        context.setLoading?.(true);

        try {
            context.setLastQuery(query);
            const data = await searchPeople(query, pageNumber);
            context.setCharacters(data);
        } catch (error) {
            console.error(error);
        }

        context.setLoading?.(false);
    }, [context.lastQuery]);

    return search;
}
