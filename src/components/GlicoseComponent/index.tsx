'use client'

import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ButtonComponent from "../ButtonComponent";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Image from "next/image";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function GlicoseComponent() {

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
                    <h3>Cadastro de Glicose em Jejum(Mensal)</h3>
                    </div>
                </div>
                <div className={styles.containerFlex}>
                    <div className={styles.containerCard}>
                        <h4>Informações Básicas</h4>
                        <div>
                        <TextField sx={{borderRadius:'0.5rem',width:"100%"}} 
                        InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <BloodtypeIcon />
                                  </InputAdornment>
                                ),
                              }}
                             id="usuário" label="Nivel de Glicose" variant="outlined" />
                        </div>
                        <div>
                        <div style={{fontWeight:"bold"}}>
                          <p>Jejum</p>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Sim" />
                          <FormControlLabel control={<Checkbox defaultChecked />} label="não" />
                        </div>
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
