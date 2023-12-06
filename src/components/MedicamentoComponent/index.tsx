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
import { CardMedicamento } from "./CardMedicamento";
import { useRouter } from "next/router";
import { Dashboard } from "../Dashboard";
import { ModaladicionarMedicamento } from "./ModalAdicionarMedicamento";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function MedicamentoComponent() {
  const router = useRouter()
  const [openModalMedicamento,setOpenModalMNEdicamento] = useState(false)
  const [listaDados,setListaDados] = useState<any>([])
  return (
    <>
    <ModaladicionarMedicamento
    openModal={openModalMedicamento}
    setOpenModal={setOpenModalMNEdicamento}
    setListaDados={setListaDados}
    listaDados={listaDados}
    />
    <Dashboard />
      <main className={`${poppins.className} ${styles.mainContainer}`}>
            <div className={styles.containerFlexContent}>
                <div className={styles.containerTitle}>
                    <div style={{display:"flex",alignItems:'center',gap:'0.4rem',justifyContent:'space-between'}}>
                    <div  style={{display:"flex",alignItems:'center',gap:'0.4rem'}}>
                    {/* <Image
                            src={'/logoDoceCuidado.png'}
                            alt='Software de gestão de saude'
                            height={110}
                            width={140}
                            className={styles.Image}
                            /> */}
                    <h3>Medicamentos (Check-In Diário)</h3>
                    </div>
                    <div>
                      <ButtonComponent onClick={()=>setOpenModalMNEdicamento(true)}>
                        Adicionar
                      </ButtonComponent>
                    </div>
                    </div>
                    
                </div>
                <div className={styles.containerFlex}>
                  {
                    listaDados?.map((element:any,key:number) =>(
                      <CardMedicamento
                      key={key}
                      nomeMedicamento={element?.nomeMedicamento}
                      quantidade={element?.quantidade}
                      />
                    ))
                  }
                </div>
            </div>
      </main>
    </>
     
  );
}
