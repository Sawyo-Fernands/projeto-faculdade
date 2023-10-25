import Image from "next/image";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export function DashboardComponent() {
  const asPath = usePathname();

  function setStyleLink(asPathActive: string) {
    return asPath == asPathActive
      ? styles.containerCardPageActive
      : styles.containerCardPage;
  }

  return (
    <>
      <header className={`${poppins.className} ${styles.header}`}>
        <div className={styles.containerLogo}>
          <Image
            src={"/logo-pequena.svg"}
            alt="e-gestão"
            height={30}
            width={52}
            className={styles.Image}
          />
        </div>
        <nav>
          <div className={styles.containerInfosUsuarios}>
            <div className={styles.containerBreadCrumb}>
              <span> e-gestão{asPath}</span>
            </div>
            <div className={styles.funcsUser}>
              <div
                className={styles.containerUser}
                style={{ borderLeft: "none" }}
              >
                <span>
                  {" "}
                  Ajuda <HelpIcon fontSize="small" />
                </span>
              </div>
              <div className={styles.containerUser}>
                <span>
                  {" "}
                  Configurações <SettingsIcon fontSize="small" />
                </span>
              </div>
              <div className={styles.containerUser}>
                <span>
                  {" "}
                  Nome do Usuário <PersonIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.dashboard}>
        <aside>
          <div className={setStyleLink("/alunos")}>
            <GroupsIcon fontSize="medium" />
          </div>
          <div className={setStyleLink("/financeiro")}>
            <StackedBarChartIcon fontSize="medium" />
          </div>
          <div className={setStyleLink("/vendas")}>
            <ShoppingCartIcon fontSize="medium" />
          </div>
          <div className={setStyleLink("/compras")}>
            <PointOfSaleIcon fontSize="medium" />
          </div>
        </aside>
      </div>
    </>
  );
}
