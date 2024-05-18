import { useState } from "react";

export default function Main(){

 const [nome, setNome] = useState("");
 const [Numero, setNumero] = useState();
 const [Lista, setLista] = useState([]) ;

let contato= (event) => {
    event.preventDefault();
    setLista([...Lista,{
      nomeSalvo:nome,
      NumeroSalvo:Numero
    }]);
}
console.table(Lista)


return(
<main>

<form id="nome" onSubmit={contato}>

<label htmlFor="">nome: 
  <input
   type="text"
   name="nome"
   id="nome" 
   value={nome}
  
  onChange={(event)=> setNome(event.target.value)}/>
</label>{nome}






<label> Numero <input 
  type="telefone"
  name="Numero" 
  id="telefone" 
  value={Numero} 
 
  onChange={(event)=> setNumero(event.target.value)}/>
</label>{Numero}

    <button id="b1">salvar</button>

</form>
{
Lista.map((contato, index) => <div key={index}> 
<p>{contato.nomeSalvo}</p> 
<p>{contato.NumeroSalvo}</p> </div>)
}
   </main>
 );
}