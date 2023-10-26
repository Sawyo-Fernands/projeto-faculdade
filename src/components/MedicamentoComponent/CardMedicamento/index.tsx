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
            <div>
                Número de doses : {quantidade}
            </div>
            <div style={{marginTop:"0.5rem"}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
                          <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
                          <FormControlLabel control={<Checkbox defaultChecked />} label="3" />

            </div>
        </div>
    )
}