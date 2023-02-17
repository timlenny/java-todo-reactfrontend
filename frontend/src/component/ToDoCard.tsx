import React from "react";
import {Todo} from "../model/ToDo";

export type ToDoCard = {
    todo: Todo
}


export function ToDoCard(props: ToDoCard){
    return (
        <section>
            <h1>{props.todo.description}</h1>
            <a>Status: {props.todo.ToDoStatus}</a>
        </section>
    )
}