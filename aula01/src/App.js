import React from 'react' //Importação da biblioteca do React para o arquivo
import Lista from "./Componentes/ListaAlunos"


  export default function App(){         //Função com o nome do arquivo
    
    const aluno = "Vinicius Pena"
    const curso = "ADS"

    return(               //A função debe retornar o conteudo que será exibido
      <>
        <h1>TDS FIAP - RWD </h1>
        <p>Aluno: {aluno}</p>
        <p>curso: {curso}</p> 
        <Lista/>          {/* Chamando a lista criada e importada */}
      </>
    )
  }