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
import { useState } from 'react'
import Radio from '@mui/material/Radio';
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function GlicoseComponent() {
  const [valorGlicose,setValorGlicose] = useState(0)
  const [ bolJejum,setBolJejum] = useState(false)

  function salvarGlicose(){

    if(valorGlicose < 100){
      localStorage.setItem("tipoDiabetico",'Normal - Risco Baixo')
      return  toast.info('Normal - Risco Baixo')
    }
    if(valorGlicose >= 100 && valorGlicose <= 125){
      localStorage.setItem('tipoDiabetico','Pre-diabetico - Risco Médio')
      return  toast.info('Pre-diabetico - Risco Médio')
    }
    if(valorGlicose > 125 && valorGlicose <= 150){
      localStorage.setItem('tipoDiabetico','Diabetico I - Risco Alto')
      return  toast.info('Diabetico I - Risco Alto')
    }
    if(valorGlicose > 150){
      localStorage.setItem('tipoDiabetico','Diabetico II - Risco Muito Alto')
      return  toast.info('Diabetico II - Risco Muito Alto')
    }
  }
  const router = useRouter()
  return (
      <main className={`${poppins.className} ${styles.mainContainer}`}>
            <div className={styles.containerFlexContent}>
                <div className={styles.containerTitle}>
                    <div style={{display:"flex",alignItems:'center',gap:'0.4rem',justifyContent:'space-between'}}>
                    <div  style={{display:"flex",alignItems:'center',gap:'0.4rem'}}>
                    <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={110}
                            width={140}
                            className={styles.Image}
                            />
                    <h3>Cadastro de Glicose em Jejum(Mensal)</h3>
                    </div>
                    <ButtonComponent
              onClick={() => {
                router.back();
              }}
            >
              Sair
            </ButtonComponent>
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
                              type="number"
                              value={valorGlicose}
                              disabled={!bolJejum}
                              onChange={(e)=>setValorGlicose(Number(e.target.value))}
                             id="usuário" label="Nivel de Glicose" variant="outlined" />
                        </div>
                        <div>
                        <div style={{fontWeight:"bold"}}>
                          <p>Jejum</p>
                          <FormControlLabel value="S" control={<Radio checked={bolJejum}  onChange={(e)=>{
                            setBolJejum(true)

                          }} />} label="Sim" />
                     <FormControlLabel value="N" control={<Radio  checked={!bolJejum}  onChange={(e)=>{
                            setBolJejum(false)
                            setValorGlicose(0)
                          }} />} label="Não" />

                        </div>
                        </div>
                        
                        <div style={{display:"flex",alignItems:"center",gap:'0.5rem',justifyContent:"space-around"}}>
                        <ButtonComponent onClick={salvarGlicose}>
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
