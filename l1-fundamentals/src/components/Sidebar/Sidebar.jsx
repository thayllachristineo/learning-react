import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const imgSrc =
    'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const imgAlt = 'Piscina em Guincho Beach, Cascais, Portugal';

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imgSrc} alt={imgAlt} />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/thayllachristineo.png"
          alt="Foto de Thaylla Silva"
        />
        <strong>Thaylla Silva</strong>
        <span>Desenvolvedora Front-End</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
};
