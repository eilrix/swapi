export type Character = {
    id: number;
    birth_year?: string;
    created?: string;
    edited?: string;
    eye_color?: string;
    films?: string[];
    gender?: string;
    hair_color?: string;
    height?: string;
    homeworld?: string;
    mass?: string;
    name?: string;
    skin_color?: string;
    species?: string[];
    starships?: string[];
    url?: string;
    vehicles?: string[];
}

export type CharactersData = {
    data: Character[];
    totalCount: number;
    pageSize: number;
    pageNumber: number;
    next?: boolean;
    previous?: boolean;
}

export type CharacterStore = {
    loading?: boolean;
    setLoading: (loading: boolean) => void;
    characters?: CharactersData;
    setCharacters: (characters: CharactersData) => void;
    lastQuery?: string;
    setLastQuery: (query: string) => void;
}