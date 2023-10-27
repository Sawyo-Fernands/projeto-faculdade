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
import { CardMedicamento } from "./CardMedicamento";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function MedicamentoComponent() {

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
                    <h3>Medicamentos (Check-In Diário)</h3>
                    </div>
                </div>
                <div className={styles.containerFlex}>
                <CardMedicamento
                nomeMedicamento="Cloridrato de metformina 500mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Cloridrato de metformina 800mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Glibenclamida 5mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Gliclazida 30mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="
                Gliclazida 80mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="
                Gliclazida 60mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Gliclazida 30mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Gliclazida 80mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Cloridrato de metformina 800mg"
                quantidade={3}
                />
                 <CardMedicamento
                nomeMedicamento="Gliclazida 30mg"
                quantidade={3}
                />
                </div>
            </div>
      </main>
     
  );
}
