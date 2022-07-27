import { useCallback, useContext } from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';

import { CharacterContext } from '../contexts/CharacterContext';
import { searchPeople } from '../utils/swapi';

export function useCharacterPagination() {
    const context = useContext(CharacterContext);
    const router = useRouter();

    const goToPage = useCallback(async (pageNumber: number) => {
        context.setLoading?.(true);

        const parsed = queryString.parse(window.location.search);
        parsed.page = pageNumber + '';
        router.push(`${window.location.origin}${window.location.pathname}?${queryString.stringify(parsed)}`, '', {});

        try {
            const data = await searchPeople(context.lastQuery ?? '', pageNumber);
            context.setCharacters(data);
        } catch (error) {
            console.error(error);
        }

        context.setLoading?.(false);
    }, [context.lastQuery]);

    return goToPage;
}
