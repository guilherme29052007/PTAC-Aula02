import { useState } from "react";

export default function Main(){

let [nome, setNome] = useState("");
let [telefone, setTelefone] = useState(0);
let Lista = [Lista,setLista] = useState([]) ;

let regis= (event) => {
    event.preventDefault()
}


return(
<main>

<form id="nome">

<label> nome 
<input
  type="text"
  name="nome"
  id="nome" 
  
  onChange={(event)=> setNome(event.target.value)}/>
</label>{nome}

</form>


<form id="telefone">

<label> telefone 
<input 
  type="tel"
  name="telefone" 
  id="tel" 
  value={telefone} 
 
  onChange={(event)=> setTelefone(event.target.value)}/>
</label>{telefone}

<button id="b1">salvar</button>

</form>




</main>




);


}