'use client'

import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function ExameComponent() {

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
                    <h3>Cadastro de Exames</h3>
                    </div>
                </div>
                <div className={styles.containerFlex}>
                <div className={styles.containerCard}>
                        <div className={styles.containerInput}>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de Glicose" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de Colesterol total" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de Colesterol HDL" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de Colesterol LDL" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de triglicerídeos" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de hemoglobina glicosilada" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de creatinina" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Dosagem de miucroalbumina na urina" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Fundoscopia" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Retinografia colorida binocular" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Eletrocardiograma" variant="outlined" />
                        </div>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VaccinesIcon />
                                  </InputAdornment>
                                ),
                              }}
                              type="date"
                             id="usuário" label="Análise de caracteres fisicos elementos e sedimentos de urina - EAS" variant="outlined" />
                        </div>
                        <div>
                        <ButtonComponent style={{height:"55px"}}>
                          Adicionar Exames
                        </ButtonComponent>
                        </div>
                    </div>
                   
                </div>
            </div>
      </main>
     
  );
}
