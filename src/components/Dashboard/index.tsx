import Image from 'next/image';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { GiRemedy } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { IoExitSharp } from "react-icons/io5";
import { FaPersonChalkboard } from "react-icons/fa6";

export function Dashboard(){
    const router = useRouter()
    const { asPath } = router

    return(
        <div className={styles.containerDashBoard}>
            <div className={styles.containerImage}>
            <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={100}
                            width={150}
                            className={styles.Image}
                            />
            </div>
            <div className={styles.containerButtons}>
            <div
            style={{
                backgroundColor:`${asPath == '/instrucoes' ? '#1F7192' : ''}`,
                color:`${asPath == '/instrucoes' ? 'white' : ''}`,
            }}
            onClick={()=>router.push("/instrucoes")}
            >
                  <HiOutlineClipboardDocumentList size={18} />  <span>Instruções</span>
                </div>
                <div
            onClick={()=>router.push("/consulta")}
            style={{
                backgroundColor:`${asPath == '/consulta' ? '#1F7192' : ''}`,
                color:`${asPath == '/consulta' ? 'white' : ''}`,
            }}
                >
                  <MdOutlineMonitor size={18} />  <span>Consultas</span>
                </div>
                <div
                style={{
                    backgroundColor:`${asPath == '/exame' ? '#1F7192' : ''}`,
                    color:`${asPath == '/exame' ? 'white' : ''}`,
                }}
            onClick={()=>router.push("/exame")}
                
                >
                  <FaPersonChalkboard size={18} />  <span>Exames</span>
                </div>
                <div
            onClick={()=>router.push("/glicose")}
            style={{
                backgroundColor:`${asPath == '/glicose' ? '#1F7192' : ''}`,
                color:`${asPath == '/glicose' ? 'white' : ''}`,
            }}
                >
                   <MdBloodtype size={18} /> <span>Glicose</span>
                </div>
                <div
            onClick={()=>router.push("/medicamento")}
            style={{
                backgroundColor:`${asPath == '/medicamento' ? '#1F7192' : ''}`,
                color:`${asPath == '/medicamento' ? 'white' : ''}`,
            }}
                >
                   <GiRemedy size={18} /> <span>Medicamento</span>
                </div>
                <div
            onClick={()=>router.push("/")}
                
                >
                   <IoExitSharp size={18} /> <span>Sair</span>
                </div>
            </div>
        </div>
    )

}