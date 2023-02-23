import React from "react";

let Alunos = ["Bianca", "Vinicius", "Carlos"];

export default function ListaAlunos (props){
    return(
        <ul>
            <li>{props.Alunos[0]}</li>
            <li>{props.Alunos[1]}</li>
            <li>{props.Alunos[2]}</li>
        </ul>
    )
}