import styles from './styles.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CardMedicamentoProps{
    nomeMedicamento:string;
    quantidade:number
}

export function CardMedicamento({nomeMedicamento,quantidade}:CardMedicamentoProps){

    function numeroParaArray(numero:number) {
        // Cria um array vazio
        var arrayResultante = [];
      
        // Preenche o array com números de 1 até o número fornecido
        for (var i = 1; i <= numero; i++) {
          arrayResultante.push(i);
        }
      
        // Retorna o array resultante
        return arrayResultante;
      }
      const lista = numeroParaArray(quantidade)

    return(
        <div className={styles.card}>
            <h3>{nomeMedicamento}</h3>
       
            <div style={{marginTop:"0.5rem"}}>
                {
                    lista.map((element:any) =>(
                        <FormControlLabel
                        key={element}
                        control={<Checkbox  />} label={`${element}`} />

                    ))
                }

            </div>
        </div>
    )
}