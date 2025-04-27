import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/thayllachristineo.png"
        alt="Foto de Thaylla Silva"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thaylla Silva</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1 atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
