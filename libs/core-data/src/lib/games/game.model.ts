export interface Game {
    id: number;
    name: string;
    publisher: string;
    released: string;
}

export const emptyGame = {
    id: null,
    name: '',
    publisher: '',
    released: ''
}
