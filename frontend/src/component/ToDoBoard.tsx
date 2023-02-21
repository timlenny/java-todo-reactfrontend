import React from "react";
import {Status} from "../model/ToDo";
import {Todo} from "../model/ToDo";
import ToDoCard from "./ToDoCard"

export type ToDoBoardType = {
    ToDoList: Todo[]
    BoardStatus: string
}

export default function ToDoBoard(props: ToDoBoardType) {


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