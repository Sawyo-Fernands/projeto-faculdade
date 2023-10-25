import Link from 'next/link';
import styles from './styles.module.scss'
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import ButtonComponent from 'src/components/ButtonComponent';
import Image from 'next/image';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export function ContainerForm(){

    return(
        <div className={styles.containerForm}>
            <div className={styles.containerContent}>
                <div className={styles.containerFormulario}>
                        {/* <h2>logo</h2> */}
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
                            // InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <AccountCircle />
                            //       </InputAdornment>
                            //     ),
                            //   }}
                             id="usuário" label="Usuário" variant="outlined" />
                            </div>
                            <div className={styles.containerInput}>
                            <TextField 
                            // InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <LockIcon />
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            sx={{borderRadius:'0.5rem',width:"100%"}}  id="senha" label="Senha" variant="outlined" />
                            </div>
                            <div className={styles.containerInfoSenha}>
                                <Link href={'/'}>
                                Esqueçeu a senha ?
                                </Link>
                            </div>
                            <div  className={styles.containerInput}>
                            <ButtonComponent style={{width:"100%",fontWeight:"600",height:"55px"}}>Entrar</ButtonComponent>
                            </div>
                        </div>
                </div>
     
            </div>
            <div className={styles.divFinal}>

</div>
        </div>
    )
}