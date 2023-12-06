"use client";

import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Dashboard } from "../Dashboard";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function InstrucaoComponent() {
  const router = useRouter()
  return (
    <>
      <Dashboard />
      <main className={`${poppins.className} ${styles.mainContainer}`}>
      <div className={styles.containerFlexContent}>
        <div className={styles.containerTitle}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {/* <Image
              src={"/logoDoceCuidado.png"}
              alt="Software de gestão de saude"
              height={110}
              width={140}
              className={styles.Image}
            /> */}
            <h3>Instruções</h3>
            
          </div>
        </div>
        <div style={{padding:"0.4rem",overflow:'auto',}} className={styles.containerInstrucoes}>
        <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>O que é diabetes?</legend>
        <p>
        O diabetes é uma condição crônica que afeta a forma como o corpo processa a glicose (açúcar no sangue). Níveis elevados de glicose podem causar problemas de saúde significativos. Existem diferentes tipos de diabetes, incluindo o Tipo 1, Tipo 2 e gestacional.
        </p>
        
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Gestão Diária</legend>
        <p>
        O cuidado diário inclui monitorar os níveis de glicose, tomar medicamentos conforme prescrito, manter uma alimentação saudável, realizar exercícios físicos regulares, e seguir as orientações do profissional de saúde.
Monitoramento Regular: A monitorização regular dos níveis de glicose é essencial para ajustar o tratamento conforme necessário. Isso pode ser feito através de um medidor de glicose. 
        </p>
        
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Monitoramento Regular</legend>
        <p>
        O cuidado diário inclui monitorar os níveis de glicose, tomar medicamentos conforme prescrito, manter uma alimentação saudável, realizar exercícios físicos regulares, e seguir as orientações do profissional de saúde.
Monitoramento Regular: A monitorização regular dos níveis de glicose é essencial para ajustar o tratamento conforme necessário. Isso pode ser feito através de um medidor de glicose. 
        </p>
        <div style={{padding:"0.3rem",display:"flex",flexDirection:"column",gap:'0.5rem'}}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/qKAYLX9SjxE?si=bAO7dXsS7UVs7BMq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Planejamento de Refeições</legend>
        <p>
        Uma dieta equilibrada para diabetes deve incluir uma variedade de alimentos, como vegetais, frutas, grãos integrais, proteínas magras e gorduras saudáveis. A contagem de carboidratos pode ajudar a controlar a ingestão de açúcar.
Evitar Açúcares Refinados: Limitar a ingestão de açúcares refinados e alimentos processados é fundamental. Opte por alimentos ricos em fibras. 
        </p>
        <div style={{padding:"0.3rem"}}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/fj_nT-5wd8Q?si=c2bzi_-7n-G-OUYX"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Benefícios do Exercício</legend>
        <p>
        A atividade física regular é crucial para controlar a glicose no sangue. Ajuda na sensibilidade à insulina e no gerenciamento do peso.
Recomendações: Pelo menos 150 minutos de atividade moderada por semana. Isso pode incluir caminhadas, ciclismo, natação e exercícios de resistência. 
        </p>
        <div style={{padding:"0.3rem"}}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/7BlTZTaiMEA?si=J0eI5zL2igUFpcM-"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Tipos de Medicamentos</legend>
        <p>
        Existem medicamentos orais, insulina de ação rápida e de longa duração. O tipo de medicamento é determinado pelo profissional de saúde. 
        </p>
        <div style={{padding:"0.3rem"}}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/CwvQnGck1iA?si=5XTwVQDhzb8GbO8j" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </fieldset>
      <fieldset
        className={styles.fieldsetContainer}
        style={{ width: '100%' }}
      >
        <legend className={styles.fieldsetTitle}>Complicações da Diabetes</legend>
        <p>
        Riscos Associados : Pessoas com diabetes têm maior risco de desenvolver doenças cardíacas, problemas renais, danos aos olhos e complicações nos pés. O controle adequado é essencial para prevenir essas complicações.         </p>
        <div style={{padding:"0.3rem"}}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/_JZ85r20wMc?si=HdY-lxYmKZvr8-5G"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </fieldset>
        </div>
       
      </div>
    
    </main>
    </>
   
  );
}
