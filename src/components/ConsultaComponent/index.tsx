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
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/router";
import { Dashboard } from "../Dashboard";
const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function ConsultaComponent() {
  const [listaConsulta, setListaConsulta] = useState<any>([]);
  const router = useRouter()
  const [nomeMedico, setNomeMedico] = useState("");
  const [dataMedico, setDataMedico] = useState("");

  const [nomeEnfermeiro, setNomeEnfermeiro] = useState("");
  const [dataEnfermeiro, setDataEnfermeiro] = useState("");

  const [nomeDentista, setNomeDentista] = useState("");
  const [dataDentista, setDataDentista] = useState("");

  const [listaMedico, setListaMedico] = useState<any>([]);
  const [listaEnfermeiro, setListaEnfermeiro] = useState<any>([]);
  const [listaDentista, setListaDentista] = useState<any>([]);
  const impressaoRef = useRef<HTMLDivElement>(null);


  const handlePrint = useReactToPrint({
    content: () => impressaoRef?.current,
    documentTitle: "Atendimento",
  });

  function salvarDados() {
    setListaConsulta([
      ...listaConsulta,
      ...listaMedico,
      ...listaEnfermeiro,
      ...listaDentista,
    ]);
    setDataDentista("");
    setNomeDentista("");
    setDataEnfermeiro("");
    setNomeEnfermeiro("");
    setDataMedico("");
    setNomeMedico("");

    setTimeout(() => {
      handlePrint();
    }, 500);
  }

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
            <h3>Cadastro de Consultas</h3>
            <ButtonComponent
              onClick={() => {
                salvarDados();
              }}
            >
              Imprimir Relatório
            </ButtonComponent>
          
          </div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.containerCard}>
            <h4>Médico(a)</h4>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Nome profissional"
                variant="outlined"
                value={nomeMedico}
                onChange={(e) => setNomeMedico(e.target.value)}
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                type="date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeFilledIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Data Consulta"
                variant="outlined"
                value={dataMedico}
                onChange={(e) => setDataMedico(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "space-around",
              }}
            >
              <ButtonComponent
                onClick={() => {
                  setListaMedico([
                    ...listaMedico,
                    {
                      profissional: nomeMedico,
                      data: dataMedico,
                      tipo: "Médico",
                    },
                  ]);
                  setDataMedico("");
                  setNomeMedico("");
                }}
              >
                Salvar
              </ButtonComponent>
              <ButtonComponent>Excluir</ButtonComponent>
            </div>
          </div>
          <div className={styles.containerCard}>
            <h4>Dentista</h4>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Nome profissional"
                variant="outlined"
                value={nomeDentista}
                onChange={(e) => setNomeDentista(e.target.value)}
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                type="date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeFilledIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Data Consulta"
                variant="outlined"
                value={dataDentista}
                onChange={(e) => setDataDentista(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "space-around",
              }}
            >
              <ButtonComponent
                onClick={() => {
                  setListaDentista([
                    ...listaMedico,
                    {
                      profissional: nomeDentista,
                      data: dataDentista,
                      tipo: "Dentista",
                    },
                  ]);
                  setDataDentista("");
                  setNomeDentista("");
                }}
              >
                Salvar
              </ButtonComponent>
              <ButtonComponent>Excluir</ButtonComponent>
            </div>
          </div>
          <div className={styles.containerCard}>
            <h4>Enfermeiro</h4>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Nome profissional"
                variant="outlined"
                value={nomeEnfermeiro}
                onChange={(e) => setNomeEnfermeiro(e.target.value)}
              />
            </div>
            <div>
              <TextField
                sx={{ borderRadius: "0.5rem", width: "100%" }}
                type="date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeFilledIcon />
                    </InputAdornment>
                  ),
                }}
                id="usuário"
                label="Data Consulta"
                value={dataEnfermeiro}
                onChange={(e) => setDataEnfermeiro(e.target.value)}
                variant="outlined"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "space-around",
              }}
            >
              <ButtonComponent
                onClick={() => {
                  setListaEnfermeiro([
                    ...listaEnfermeiro,
                    {
                      profissional: nomeEnfermeiro,
                      data: dataEnfermeiro,
                      tipo: "Enfermeiro",
                    },
                  ]);
                  setDataEnfermeiro("");
                  setNomeEnfermeiro("");
                }}
              >
                Salvar
              </ButtonComponent>
              <ButtonComponent>Excluir</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding:'3rem'
          }}
          ref={impressaoRef}
        >
          <div className={styles.containerTitle}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Image
              src={"/logoDoceCuidado.png"}
              alt="Software de gestão de saude"
              height={110}
              width={140}
              className={styles.Image}
            />
            <h3>Lista de Consultas</h3>
          </div>
        </div>
          {listaConsulta.map((element: any) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                borderBottom: "1px solid gray",
                padding: "0.5rem",
              }}
            >
              <div>
                <span>Nome:</span>
                <br />
                <span> {element.profissional}</span>
              </div>
              <div>
                <span>Data:</span>
                <br />
                <span> {element.data}</span>
              </div>
              <div>
                <span>tipo:</span>
                <br />
                <span> {element.tipo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
   
  );
}
