import {  useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';
import { Character } from '../types';

export function useCharacterList(): {
    list: Character[];
    loading: boolean;
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    previous: boolean;
    next: boolean;
} {
    const context = useContext(CharacterContext);
    return {
        list: context.characters?.data ?? [],
        pageSize: context.characters?.pageSize ?? 10,
        pageNumber: context.characters?.pageNumber ?? 1,
        totalCount: context.characters?.totalCount ?? 0,
        loading: context.loading ?? false,
        previous: context.characters?.previous ?? false,
        next: context.characters?.next ?? false,
    }
}