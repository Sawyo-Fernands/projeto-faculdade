'use client'

import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function ConsultaComponent() {

  return (
      <main className={`${poppins.className} ${styles.mainContainer}`}>
            <div className={styles.containerFlexContent}>
                <div className={styles.containerTitle}>
                    <div style={{display:"flex",alignItems:'center',gap:'0.4rem'}}>
                    <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={110}
                            width={140}
                            className={styles.Image}
                            />
                    <h3>Cadastro de Consultas</h3>
                    </div>
                </div>
                <div className={styles.containerFlex}>
                    <div className={styles.containerCard}>
                        <h4>Médico(a)</h4>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        type="date"
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccessTimeFilledIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:'0.5rem',justifyContent:"space-around"}}>
                        <ButtonComponent>
                            Salvar
                        </ButtonComponent>
                        <ButtonComponent>
                            Excluir
                        </ButtonComponent>
                        </div>
                    </div>
                    <div className={styles.containerCard}>
                        <h4>Enfermeiro(a)</h4>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        type="date"
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccessTimeFilledIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:'0.5rem',justifyContent:"space-around"}}>
                        <ButtonComponent>
                            Salvar
                        </ButtonComponent>
                        <ButtonComponent>
                            Excluir
                        </ButtonComponent>
                        </div>
                    </div>
                    <div className={styles.containerCard}>
                        <h4>Dentista</h4>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        type="date"
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccessTimeFilledIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nome profissional" variant="outlined" />
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:'0.5rem',justifyContent:"space-around"}}>
                        <ButtonComponent>
                            Salvar
                        </ButtonComponent>
                        <ButtonComponent>
                            Excluir
                        </ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
      </main>
     
  );
}
