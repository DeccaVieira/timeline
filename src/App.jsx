import Post from "./components/Post"
import "./global.css";
import { Header } from "./components/Header";
import styles from "./components/App.module.css"
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Decca Vieira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus saepe suscipit quasi id assumenda tenetur veniam blanditiis iste voluptatibus sint, accusantium veritatis recusandae deserunt at ipsam sequi aut tempora."
          />
          <Post
            author="Decca Vieira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus saepe suscipit quasi id assumenda tenetur veniam blanditiis iste voluptatibus sint, accusantium veritatis recusandae deserunt at ipsam sequi aut tempora."
          />
        </main>
      </div>
    </>
  );
}

export default App;
