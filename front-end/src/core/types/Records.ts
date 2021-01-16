export type RecordResponse = {
    content: Record[];
    totalPages:number;
}

export type Record = {
    id: number,
    moment: string,
    name: string,
    age: number,
    gameTitle: string,
    gamePlatform: string,
    genreName: string;
}