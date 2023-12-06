import { Dialog, TextField } from "@mui/material";
import styles from './styles.module.scss';
import ButtonComponent from "src/components/ButtonComponent";
import { useState } from 'react'

interface ModaladicionarMedicamentoprops{
    openModal:boolean;
    setOpenModal:(value:boolean) => void;
    setListaDados:(value:any) => void;
    listaDados:any;
}

export function ModaladicionarMedicamento({openModal,setOpenModal,setListaDados,listaDados}:ModaladicionarMedicamentoprops){

    function adicionarItem(){
        setListaDados([...listaDados,{nomeMedicamento,quantidade}])
        setOpenModal(false)
        setQuantidade("")
        setNomeMedicamento("")
    }
    const [nomeMedicamento,setNomeMedicamento] = useState("")
    const [quantidade,setQuantidade] = useState("0")


    return(
        <Dialog
        open={openModal}
        onClose={()=>setOpenModal(false)}
        >
           <div style={{width:"500px",padding:"0.8rem",display:"flex",gap:'0.5rem',flexDirection:"column"}}>
            <div>
                <span>Adicionar Medicamento</span>
            </div>
           <div className={styles.containerInput}>
             <TextField 
                    value={nomeMedicamento}
                    onChange={(e)=>setNomeMedicamento(e.target.value)}
                  sx={{borderRadius:'0.5rem',width:"100%"}}  id="senha" label="Medicamento" variant="outlined" />
             </div>
             <div className={styles.containerInput}>
             <TextField 
             value={quantidade}
             onChange={(e)=>setQuantidade(e.target.value)}
                  sx={{borderRadius:'0.5rem',width:"100%"}}  id="senha" label="Quantidade" variant="outlined" />
             </div>
             <div style={{display:"flex",gap:'0.2rem',justifyContent:'flex-end'}}>
             <ButtonComponent onClick={()=>{
                  setQuantidade("")
                  setNomeMedicamento("")
                setOpenModal(false)}}>
                    Sair 
                </ButtonComponent>
                <ButtonComponent onClick={adicionarItem}>
                    Adicionar 
                </ButtonComponent>
             </div>
           </div>
        </Dialog>
    )
}