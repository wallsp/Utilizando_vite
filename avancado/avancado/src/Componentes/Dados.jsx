import { useState } from "react";

const Dados = () =>{

    let mostreDados = 10;

    //12- Atribuindo novo valor 
    const [novoNumero, setNovoNumero] = useState(15);

    return (
       <div>
        <p>Valor; {mostreDados}</p>

        {/*exibindo novo valor atribuido*/}
        <p>Novo Valor; {novoNumero}</p>

        {/*Exibindo um novo valor atraves de um evento de Click*/}
        <button onClick={() =>setNovoNumero(20)}>Mudando o valor apos click</button>
       </div>
    )
}

export default Dados;