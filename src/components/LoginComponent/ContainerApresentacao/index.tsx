import Image from 'next/image'
import styles from './styles.module.scss'

export function ContainerApresentacao(){

    return(
        <div className={styles.containerApresentacao}>
            <div className={styles.containerContent}>
                <h1>Software de <br /> Gestão de <span>Saúde</span></h1>
                <Image
                src={'/healthcare-development-san-diego.png'}
                alt='Software de gestão de saúde'
                height={400}
                width={400}
                className={styles.Image}
                />
            </div>

        </div>
        
    )
}