import { useState } from 'react';
import styles from './Box.module.css'
import PaginaIdeias from "../PaginaIdeias/PaginaIdeias.jsx"

export default function Box() {
    return (
        <div className={styles.pagina}>
            <div className={styles.box}>
                <h1 className={styles.titulo}>Painel de ideias</h1>
                <PaginaIdeias/>
            </div>
        </div>
    )
}