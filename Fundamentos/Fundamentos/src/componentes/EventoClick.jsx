import React from 'react';

const EventoClick = () => {
  // 8 - Função com handleClick
  const handleClick = () => {
    console.log('handleClick executou!');
  };

  //9 - Função de rederização 
  const rederizando = (x) => {

    if(x) {
      return <h1>São Paulo é o melhor do mundo</h1>
    }
    else{
      return <h1>Rederizando Y</h1>
    }
  }

  return (
    <div>
      <button onClick={() => console.log('teste click')}>CLIQUE AQUI</button>
      {/*Chamando Função com HandleClick */}
      <div> 
        <button onClick={handleClick}>Botão com função </button>
      </div>

      {/*Chamando Função de rederização */}
      
      {rederizando(true)}
      {rederizando(false)}
     
    </div>
  );
}

export default EventoClick;
