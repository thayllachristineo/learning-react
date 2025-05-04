import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';
import { useState } from 'react';

// const comments = [1, 2, 3];

export const Post = ({ author, content, time: { publishedAt } }) => {
  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(
    publishedAt,
    "'d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  };

  console.log(comments);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((c) => {
          if (c.element === 'paragraph') {
            return <p>{c.content}</p>;
          } else if (c.element === 'link') {
            return (
              <p>
                <a href="">{c.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} />
        ))}
      </div>
    </article>
  );
};
