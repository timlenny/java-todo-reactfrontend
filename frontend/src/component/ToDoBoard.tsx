import React from "react";
import {Status} from "../model/ToDo";

export type ToDoBoard = {
    ToDoList: ToDoCard[]
    BoardStatus: Status
}

export function ToDoBoard(props: ToDoBoard) {

    //Filter alles was nicht im gewünschten Status ist
    const ToDoListFiltered = props.ToDoList.filter((toDoData) => {
        if (toDoData.status === props.BoardStatus){
            return toDoData;
        } else {

        }
    })



    //Map Data -> ToDo Cards
    const ToDoCards = ToDoListFiltered.map((ToDoData) => {
        console.log(ToDoData)
        return <ToDoCard id={ToDoData.id} description={ToDoData.description} status={ToDoData.status}></ToDoCard>
    })

    return(
        <div>
            {ToDoCards}
        </div>
    )

}