import React, {useState} from "react";
import {Status} from "../model/ToDo";


import axios from "axios";
import {Todo} from "../model/ToDo";
import ToDoBoard, {ToDoBoardType} from "./ToDoBoard";


export type ToDoBoardGalleryProps = {
    todoList: Todo[]
}

export function ToDoBoardGallery(props: ToDoBoardGalleryProps) {


    const importParam: ToDoBoardType = {
        ToDoList: props.todoList,
        BoardStatus: "OPEN"
    };

    const importParam2: ToDoBoardType = {
        ToDoList: props.todoList,
        BoardStatus: "IN_PROGRESS"
    };

    const importParam3: ToDoBoardType = {
        ToDoList: props.todoList,
        BoardStatus: "DONE"
    };



    const openTodos = ToDoBoard(importParam)
    const ongoingTodos = ToDoBoard(importParam2)
    const doneTodos = ToDoBoard(importParam3)

    // Open Gallery
    return(
        <div className={"TodosOverview"}>
            <section>{openTodos}</section>
            <section>{ongoingTodos}</section>
            <section>{doneTodos}</section>
        </div>
    )



}