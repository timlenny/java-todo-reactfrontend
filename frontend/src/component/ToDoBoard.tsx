import React from "react";
import {ToDoCard} from "./ToDoCard";
import {Status} from "../model/ToDo";

export type ToDoBoard = {
    ToDoList: ToDoCard[]
    BoardStatus: Status
}

export function ToDoBoard(props: ToDoBoard) {

    //Filter alles was nicht im gewünschten Status ist
    const ToDoList = props.ToDoList.filter((toDoData) => {
        if(toDoData.todo.ToDoStatus !== props.BoardStatus) return toDoData
    })

    //Map Data -> ToDo Cards
    const ToDoCards = ToDoList.map((ToDoData) => {
        return ToDoCard(ToDoData)
    })

    return(
        <div>
            {ToDoCards}
        </div>
    )



}