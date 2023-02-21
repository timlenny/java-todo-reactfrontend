

export type Todo = {

    id: string,
    description: string,
    ToDoStatus: Status

}


export enum Status {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
}