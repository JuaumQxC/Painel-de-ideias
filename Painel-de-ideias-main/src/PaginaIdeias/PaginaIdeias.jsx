import { useState } from 'react';
import styles from './PaginaIdeias.module.css'

export default function PaginaIdeias() {
const [ideias, setIdeias] = useState([]);        // a lista de ideias, começa vazia
const [novaIdeia, setNovaIdeia] = useState("");  // o texto digitado no campo
const [erro, setErro] = useState("");            // mensagem de validação (RF6)
// const [contador, setContador] = useState(0); // conta ideias enviadas

function envioIdeia(event) {
    event.preventDefault(); 
    if (novaIdeia.trim() === "") {
        setErro("*Não pode enviar uma ideia vazia.")
        return;
    }
    setErro("");
    setIdeias(ideia => [...ideias, novaIdeia]); // adicionando uma nova ideia à um vetor 
    console.log("ideia enviada:" + novaIdeia);
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

        <div className={styles.ideias}>
            {ideias && ideias.map((ideia, index = Date.now()) => (
                <li key={index}>{ideia}</li>
            ))
            }
        </div>

        <div className={styles.rodape}>
            <p>{ideias.length} ideias registradas</p>
        </div>
    </form>
)

}