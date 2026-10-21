import { useState } from 'react';
import styles from './PaginaIdeias.module.css'

export default function PaginaIdeias() {
const [ideias, setIdeias] = useState([]);        // a lista de ideias, começa vazia
const [novaIdeia, setNovaIdeia] = useState("");  // o texto digitado no campo
const [erro, setErro] = useState("");            // mensagem de validação (RF6)


function envioIdeia(event) {
    event.preventDefault(); 
    if (novaIdeia.trim() === "") {
        setErro("*Não pode enviar uma ideia vazia.")
        return;
    }
    setErro("");
    
    console.log("ideia enviada:" + novaIdeia);


}

return (
    <form onSubmit={envioIdeia} className={styles.formulario}> 
        <input type="text"
        value={novaIdeia}
        onChange={(e) => setNovaIdeia(e.target.value)}
        placeholder="Digite sua ideia aqui"
        />
        {erro && <p className={styles.erro}>{erro}</p>}
        <button type="submit">Enviar</button>
        <div></div>
    </form>
)

}