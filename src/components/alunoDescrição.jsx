import React from 'react'

const AlunoDescrição = (props) => {
    console.log('Props do componente', props)
  return (
    <div>
      <strong>Nome: </strong> <span>{props.nome}</span> <br />
      <strong>Idade: </strong> <span>{props.idade}</span>
      <hr />
    </div>
  )
}

export default AlunoDescrição