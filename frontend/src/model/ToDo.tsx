

export type Todo = {

    id: string,
    description: string,
    ToDoStatus: Status

}


export enum Status {
    OPEN,
    IN_PROGRESS,
    DONE,
}