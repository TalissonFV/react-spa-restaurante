/* eslint-disable react/react-in-jsx-scope */
import styles from "./Padrao.module.scss";
import { Outlet } from "react-router-dom";
import stylesTema from "styles/Tema.module.scss";



export default function Default() {
  return (
    <>
      <header className={styles.header}>
        <div className={stylesTema.titulo}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
