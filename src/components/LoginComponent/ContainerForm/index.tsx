'use client'

import Link from 'next/link';
import styles from './styles.module.scss'
import TextField from '@mui/material/TextField';
import ButtonComponent from 'src/components/ButtonComponent';
import Image from 'next/image';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useRouter } from 'next/navigation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import axios from 'axios';

export function ContainerForm(){
    const router = useRouter()
    const [habilitarModulos,setHabilitarModulos] = useState(false)
    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')



    return(
        <div className={styles.containerForm}>
            <div className={styles.containerContent}>
                <div className={styles.containerFormulario}>
                        {/* <h2>logo</h2> */}
                        {
                            !habilitarModulos ? (
                                <>
                                 <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={190}
                            width={300}
                            className={styles.Image}
                            />
                        
                        <div className={styles.containerInputs}>
                            <div className={styles.containerInput}>
                            <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                            value={usuario}
                            onChange={(e)=>setUsuario(e.target.value)}
                             id="usuário" label="Usuário" variant="outlined" />
                            </div>
                            <div className={styles.containerInput}>
                            <TextField 
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                            sx={{borderRadius:'0.5rem',width:"100%"}}  id="senha" label="Senha" variant="outlined" />
                            </div>
                            <div className={styles.containerInfoSenha}>
                                <Link href={'/'}>
                                Esqueçeu a senha ?
                                </Link>
                            </div>
                            <div  className={styles.containerInput}>
                            <ButtonComponent 
                            onClick={()=>setHabilitarModulos(!habilitarModulos)}
                            style={{width:"100%",fontWeight:"600",height:"55px"}}>Entrar</ButtonComponent>
                            </div>
                        </div>
                                </>
                            ) : (
                                <>
                                 <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={190}
                            width={300}
                            className={styles.Image}
                            />
                        
                        <div className={styles.containerInputs}>
                            <div className={styles.containerInput}>
                            <ButtonComponent
                             onClick={()=>router.push("/exame")}
                            style={{width:"100%",fontWeight:"600",height:"40px"}}>
                                <FactCheckIcon  fontSize='medium'/>  Exame
                            </ButtonComponent>
                            </div>
                            <div className={styles.containerInput}>
                            <ButtonComponent style={{width:"100%",fontWeight:"600",height:"40px"}}
                            onClick={()=>router.push("/consulta")}
                            >
                              <PersonIcon  fontSize='medium'/>  Consulta
                            </ButtonComponent>
                            </div>
                            <div className={styles.containerInput}>
                            <ButtonComponent 
                            onClick={()=>router.push("/medicamento")}
                            style={{width:"100%",fontWeight:"600",height:"40px"}}>
                                <MedicalServicesIcon  fontSize='medium'/>  Medicamento
                            </ButtonComponent>
                            </div>
                            <div className={styles.containerInput}
                             onClick={()=>router.push("/glicose")}
                            >
                            <ButtonComponent style={{width:"100%",fontWeight:"600",height:"40px"}}>
                                <BloodtypeIcon  fontSize='medium'/>  Registrar Glicose
                            </ButtonComponent>
                            </div>
                            <div  className={styles.containerInput}>
                            <ButtonComponent 
                            onClick={()=>setHabilitarModulos(!habilitarModulos)}
                            isReturn={true}
                            style={{width:"100%",fontWeight:"600",height:"55px",backgroundColor:"#c94848 !important"}}>Sair</ButtonComponent>
                            </div>
                        </div>
                                </>
                            )
                        }
                      
                </div>
     
            </div>
            <div className={styles.divFinal}>

</div>
        </div>
    )
}