import { Comment } from '../Comment';
import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/thayllachristineo.png"
            alt="Foto de Thaylla Silva"
          />
          <div className={styles.authorInfo}>
            <strong>Thaylla Silva</strong>
            <span>Desenvolvedora Front-End</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        nihil laboriosam vitae nam officiis exercitationem unde, ullam illum eos
        necessitatibus itaque totam non fuga culpa, nisi quibusdam tempore velit
        neque?
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
