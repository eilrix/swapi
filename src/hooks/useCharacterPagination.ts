import { useCallback, useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';
import { searchPeople } from '../utils/swapi';

export function useCharacterPagination() {
    const context = useContext(CharacterContext);

    const goToPage = useCallback(async (pageNumber: number) => {
        context.setLoading?.(true);
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
