import styles from "./Header.module.css";
import arraia from "../assets/arraia.png";
export function Header() {
  console.log(arraia);
  return (
    <>
      <header className={styles.header}>
        <img src={arraia} alt="logotipo" />
      </header>
    </>
  );
}
