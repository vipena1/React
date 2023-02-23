import React from 'react'
import Lista from './componentes/listaAlunos'
import ListaAlunos from "./componentes/listaAlunosDois"


let aluno = "Vinicius";
let n1 = 10;
let n2 = 15;
const AlunosDois = ["Vinicius", "Carlos", "Leonardo"];

function App() {
  return (
    <div>

      <h1>Iniciando nosso projet </h1>
      <br/>
      <p>Nome do aluno: {aluno}</p>
      <Lista/>
      <p>
        SOMA DOS NUMEROS N1 + N2 = {n1 + n2}
      </p>
      <ListaAlunos Alunos={AlunosDois}/>

    </div>
  );
}

export default App;
