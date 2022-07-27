import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useCallback, useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';
import { searchPeople } from '../utils/swapi';

export function useCharacterSearch() {
    const context = useContext(CharacterContext);
    const router = useRouter();

    const search = useCallback(async (query: string, pageNumber: number) => {
        if (query == context.lastQuery) return;
        context.setLoading?.(true);

        const parsed = queryString.parse(window.location.search);
        parsed.search = query;
        if (!query) delete parsed.search;
        parsed.page = pageNumber + '';
        router.push(`${window.location.origin}${window.location.pathname}?${queryString.stringify(parsed)}`, '', {});

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
