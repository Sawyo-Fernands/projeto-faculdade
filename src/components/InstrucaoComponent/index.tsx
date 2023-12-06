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
       
      </div>
    
    </main>
    </>
   
  );
}
