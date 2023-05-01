import styles from "./Header.module.css";
import arraias from "../assets/arraias.png";
export function Header() {
  console.log(arraias);
  return (
    <>
      <header className={styles.header}>
        <img src={arraias} alt="logotipo" />
      </header>
    </>
  );
}
