//renderizando com react no lado do servidor a function Button

import styles from './Button.module.css'

export default function Button() {
    return (
        <a href="https://pointerpointer.com/"><button 
        type="button"
        className={styles.error}
        >
            Clique aqui!
        </button></a>
    )
}