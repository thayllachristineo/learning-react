import { Header } from './components/Header/Header';
import { Post } from './Post';

import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Post title="Hello" description="World" />
      <Post title="Goodbye" description="World" />
    </>
  );
}

export default App;
