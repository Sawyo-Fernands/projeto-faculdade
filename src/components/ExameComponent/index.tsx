"use client";

import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/router";
import { Dashboard } from "../Dashboard";
import { toast } from "react-toastify";

const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function ExameComponent() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const impressaoRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => impressaoRef?.current,
    documentTitle: 'Atendimento',
    onAfterPrint() {
      reset({})
    },
  });
  const router = useRouter()
  const [listaDados, setListaDados] = useState<any>(null);
  
  function gerarRelatorio() {
    const submit = handleSubmit((data) => {
      setListaDados(data);
      
    });
    submit();

    setTimeout(() => {
      handlePrint()
    }, 500);
  }

  return (
    <>
    <Dashboard />
    <main className={`${poppins.className} ${styles.mainContainer}`}>
      <div className={styles.containerFlexContent}>
        <div className={styles.containerTitle}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem",justifyContent:"space-between" }}>
            <div  style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {/* <Image
              src={"/logoDoceCuidado.png"}
              alt="Software de gestão de saude"
              height={110}
              width={140}
              className={styles.Image}
            /> */}
            <h3>Cadastro de Exames</h3>
            <ButtonComponent
            onClick={()=>toast.success("Exame enviado!")}
            >
              Enviar 
            </ButtonComponent>
            </div>
        
         </div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.containerCard}>
            <div className={styles.containerInput}>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("glicose")}
                type="date"
                id="usuário"
                label="Dosagem de Glicose"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                {...register("colesterolTotal")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                type="date"
                id="usuário"
                label="Dosagem de Colesterol total"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                type="date"
                {...register("colesterolHDL")}
                id="usuário"
                label="Dosagem de Colesterol HDL"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                type="date"
                {...register("colesterolLDL")}
                id="usuário"
                label="Dosagem de Colesterol LDL"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("triglicerideos")}
                type="date"
                id="usuário"
                label="Dosagem de triglicerídeos"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("hemoglobinaGlicosada")}
                type="date"
                id="usuário"
                label="Dosagem de hemoglobina glicosilada"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("creatinina")}
                type="date"
                id="usuário"
                label="Dosagem de creatinina"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("miucroalbuminaUrina")}
                type="date"
                id="usuário"
                label="Dosagem de miucroalbumina na urina"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("fundoscopia")}
                type="date"
                id="usuário"
                label="Fundoscopia"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("coloridaBinocular")}
                type="date"
                id="usuário"
                label="Retinografia colorida binocular"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("eletrocardiograma")}
                type="date"
                id="usuário"
                label="Eletrocardiograma"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VaccinesIcon />
                    </InputAdornment>
                  ),
                }}
                type="date"
                {...register("analiseCaracteres")}
                id="usuário"
                label="Análise de caracteres fisicos elementos e sedimentos de urina - EAS"
                variant="outlined"
              />
            </div>
            <div>
              <ButtonComponent
                style={{ height: "55px" }}
                onClick={gerarRelatorio}
              >
                Adicionar Exames
              </ButtonComponent>
            </div>
          </div>
        </div>
        {
          listaDados && (
            <div style={{ display:"none"}}>
            <div ref={impressaoRef} className={styles.containerPrint}>
              <div className={styles.containerTitle}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Image
                  src={"/logoDoceCuidado.png"}
                  alt="Software de gestão de saude"
                  height={110}
                  width={140}
                  className={styles.Image}
                />
                <h3>Data de Agendamento dos exames</h3>
              </div>
            </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de Glicose: {listaDados?.glicose && format(new Date(listaDados?.glicose),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de Colesterol total: { listaDados?.colesterolTotal && format(new Date(listaDados?.colesterolTotal),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de Colesterol HDL: {listaDados?.colesterolHDL && format(new Date(listaDados?.colesterolHDL),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de Colesterol LDL: {listaDados?.colesterolLDL && format(new Date(listaDados?.colesterolLDL),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de triglicerídeos: {listaDados?.triglicerideos && format(new Date(listaDados?.triglicerideos),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de hemoglobina glicosilada: {listaDados?.hemoglobinaGlicosada && format(new Date(listaDados?.hemoglobinaGlicosada),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de creatinina: {listaDados?.creatinina && format(new Date(listaDados?.creatinina),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Dosagem de miucroalbumina na urina: {listaDados?.miucroalbuminaUrina && format(new Date(listaDados?.miucroalbuminaUrina),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Fundoscopia: {listaDados?.fundoscopia && format(new Date(listaDados?.fundoscopia),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Eletrocardiograma: {listaDados?.eletrocardiograma && format(new Date(listaDados?.eletrocardiograma),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Retinografia colorida binocular: {listaDados?.coloridaBinocular && format(new Date(listaDados?.coloridaBinocular),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>Eletrocardiograma: {listaDados?.eletrocardiograma && format(new Date(listaDados?.eletrocardiograma),'dd/MM/yyyy')}</p>   
              </div>
              <div className={styles.containerInfos}>
                   <p>EAS: {listaDados?.analiseCaracteres && format(new Date(listaDados?.analiseCaracteres),'dd/MM/yyyy')}</p>   
              </div>
            </div>
            </div>
          )
        }
      
     
      </div>
    </main>
    </>
 
  );
}
