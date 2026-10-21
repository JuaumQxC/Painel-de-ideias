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
    setIdeias(ideia => [...ideias, {id: Date.now(), texto: novaIdeia, concluida: false}]); // adicionando uma nova ideia à um vetor 
    console.log("ideia enviada:" + novaIdeia);
    console.log("lista de ideias:" + ideias);
}

function ideiaConcluida(id) {
    setIdeias(ideias => ideias.map(ideia => {
        if (ideia.id === id) {
            return { ...ideia, concluida: !ideia.concluida };
        }
        return ideia;
    }));
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
            {ideias && ideias.map((ideia) => (
                <li style={{textDecoration: ideia.concluida ? 'line-through' : 'none'}} 
                    key={ideia.id}>{ideia.texto}

                    <input value={ideia.concluida} 
                    type="checkbox" 
                    onClick={() => ideiaConcluida(ideia.id)}>
                    </input>

                    <button value={ideia.id}
                    onClick={() => setIdeias(ideias.filter(i => i.id !== ideia.id))}
                    >X</button>
                </li>
            ))
            }
        </div>

        <div className={styles.rodape}>
            <p>{ideias.length} ideias registradas, {ideias.filter(ideia => ideia.concluida).length} concluídas</p>
        </div>
    </form>
)

}