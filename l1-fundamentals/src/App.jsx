import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            title="Título da publicação"
            description="Descrição da publicação"
          />
        </main>
      </div>
    </>
  );
}

export default App;
