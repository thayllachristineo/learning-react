import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thayllachristineo.png',
      name: 'Thaylla Silva',
      role: 'Desenvolvedora Front-End',
    },
    content: [
      {
        element: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil laboriosam vitae nam officiis exercitationem unde, ullam illum eos necessitatibus itaque totam non fuga culpa, nisi quibusdam tempore velit neque?',
      },
    ],
    time: {
      publishedAt: new Date('2025-04-28 20:00:00'),
    },
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/cesar-cb.png',
      name: 'Cesar Boaventura',
      role: 'Desenvolvedor Front-End',
    },
    content: [
      {
        element: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil laboriosam vitae nam officiis exercitationem unde, ullam illum eos necessitatibus itaque totam non fuga culpa, nisi quibusdam tempore velit neque?',
      },
    ],
    time: {
      publishedAt: new Date('2025-04-24 20:00:00'),
    },
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                time={post.time}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
