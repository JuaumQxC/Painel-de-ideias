import { useState } from 'react';
import styles from './Box.module.css'
// import PaginaIdeias from "./PaginaIdeias/PaginaIdeias.jsx"

export default function Box() {
    return (
        <div className={styles.pagina}>
            <div className={styles.box}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque distinctio, veritatis voluptate amet alias iste quo officia maiores placeat impedit error, atque sint totam velit aliquam porro pariatur neque.</p>
            </div>
        </div>
        // <PaginaIdeias/>
    )
}