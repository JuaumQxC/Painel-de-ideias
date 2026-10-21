import { useState } from 'react';
import styles from './PaginaIdeias.module.css'

export default function PaginaIdeias() {
const [ideias, setIdeias] = useState([]);        // a lista de ideias, começa vazia
const [novaIdeia, setNovaIdeia] = useState("");  // o texto digitado no campo
const [erro, setErro] = useState("");            // mensagem de validação (RF6)
const [contador, setContador] = useState(0); // conta ideias enviadas

function envioIdeia(event) {
    event.preventDefault(); 
    if (novaIdeia.trim() === "") {
        setErro("*Não pode enviar uma ideia vazia.")
        return;
    }
    setErro("");
    setIdeias([ideias, novaIdeia]); // adicionando uma nova ideia à um vetor 
    console.log("ideia enviada:" + novaIdeia);
    setContador(contador + 1);
    console.log("lista de ideias:" + ideias);
}

return (
    <form onSubmit={envioIdeia} className={styles.formulario}> 
        <input type="text"
        value={novaIdeia}
        onChange={(e) => setNovaIdeia(e.target.value)}
        placeholder="Digite sua ideia aqui"
        />
        {erro && <p className={styles.erro}>{erro}</p>}
        <button type="submit" style={{}}>Enviar</button>
        <div>
            {ideias.map((ideia, index) => (
                <p key={index}>{index + 1} {ideia}</p>
            ))}
        </div>
        <div className={styles.rodape}>
            <p>{contador} ideias registradas</p>
        </div>
    </form>
)

}