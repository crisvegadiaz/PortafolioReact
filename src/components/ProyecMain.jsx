import { useAppContext } from "../components/AppContext";
import styles from "../styles/ProyecMain.module.css";
import ProyecImg from "./ProyecImg";
import { useEffect } from "react";

const ProyecMain = () => {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    rootElement.style.backgroundColor = state.theme
      ? "var(--dark-background)"
      : "var(--light-surface)";
  }, [state.theme]);

  return (
    <main className={styles.proyecMain}>
      <ProyecImg theme={state.theme}/>
    </main>
  );
};

export default ProyecMain;
