import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

const Cardapio = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text /**padrao bem*/}> 
                    A casa do código e da massa
                </div>
            </header>
        </main>
    )
}

export default Cardapio;