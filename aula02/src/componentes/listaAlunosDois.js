import React from "react";

export default function ListaAlunos (props){
    return(
        <ul>
            <li>{props.Alunos[0]}</li>
            <li>{props.Alunos[1]}</li>
            <li>{props.Alunos[2]}</li>
        </ul>
    )
}