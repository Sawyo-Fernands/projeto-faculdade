import styles from './styles.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CardMedicamentoProps{
    nomeMedicamento:string;
    quantidade:number
}

export function CardMedicamento({nomeMedicamento,quantidade}:CardMedicamentoProps){

    return(
        <div className={styles.card}>
            <h3>{nomeMedicamento}</h3>
       
            <div style={{marginTop:"0.5rem"}}>
                {
                    nomeMedicamento.indexOf("metformina") >= 0 && (
                        <>
                         <FormControlLabel control={<Checkbox  />} label="1" />
                          <FormControlLabel control={<Checkbox  />} label="2" />
                          <FormControlLabel control={<Checkbox  />} label="3" />
                        </>
                    )
                }
                   {
                    nomeMedicamento.indexOf("Gliclazida") >= 0 && (
                        <>
                         <FormControlLabel control={<Checkbox  />} label="1" />
                        </>
                    )
                }  
                    {
                    nomeMedicamento.indexOf("80mg") >= 0 && (
                        <>
                         <FormControlLabel control={<Checkbox  />} label="1" />
                         <FormControlLabel control={<Checkbox  />} label="2" />

                        </>
                    )
                }     
                  {
                    nomeMedicamento == 'Glibenclamida 5mg' && (
                        <>
                         <FormControlLabel control={<Checkbox  />} label="1" />
                         <FormControlLabel control={<Checkbox  />} label="2" />
                         <FormControlLabel control={<Checkbox  />} label="3" />

                        </>
                    )
                }    
                  

            </div>
        </div>
    )
}