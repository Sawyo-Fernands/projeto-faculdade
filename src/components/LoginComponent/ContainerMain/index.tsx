import { ReactNode } from "react"
import styles from './styles.module.scss'

interface ContainerMainProps{
    children:ReactNode;
}

export function ContainerMain({children}:ContainerMainProps){

    return(
        <main className={styles.containerMain}>
            {children}
        </main>
    )
}