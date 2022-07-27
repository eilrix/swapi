import { Character, CharactersData } from '../types';

const resultToCharacter = (result: any): Character => {
    return {
        ...result,
        id: parseInt(result.url.replace('https://swapi.dev/api/people/', '').replace('/', '')),
    }
}

export function getPeople(pageNumber: number): Promise<CharactersData> {
    return fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
        .then(response => response.json())
        .then(data => ({
            data: data.results.map(resultToCharacter),
            totalCount: data.count,
            pageSize: 10,
            pageNumber: pageNumber,
            previous: data.previous,
            next: data.next,
        }));
}

export function getPerson(id: number): Promise<Character> {
    return fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(data => resultToCharacter(data));
}

export function searchPeople(query: string, pageNumber: number): Promise<CharactersData> {
    return fetch(`https://swapi.dev/api/people/?search=${query}&page=${pageNumber}`)
        .then(response => response.json())
        .then(data => ({
            data: data.results.map(resultToCharacter),
            totalCount: data.count,
            pageSize: 10,
            pageNumber: pageNumber,
            previous: data.previous,
            next: data.next,
        }));
}