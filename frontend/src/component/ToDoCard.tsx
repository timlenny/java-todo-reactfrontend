import React from "react";
import {Todo} from "../model/ToDo";


export type ToDoCardProps = {
    todo: Todo
}

export default function ToDoCard(props: Todo){

    console.log(props.status)
    const stat:string = props.status;

        return (
            <section>
                <h1>{props.description}</h1>
                <a>{stat}</a>
            </section>
        )



}