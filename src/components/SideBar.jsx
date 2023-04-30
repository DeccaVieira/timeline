import styles from "./SideBar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />
      <div className={styles.profile}>

        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/98783385?v=4"
        />
        <strong>Decca Vieira</strong>
        <span>Developer FullStack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar o seu perfil!
        </a>
      </footer>
    </aside>
  );
}
