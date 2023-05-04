import Post from './Post';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';

import "./global.css"

function App() {

  return (
    <>
    <Header />  

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
          author="Pedro Carvalho"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempora veniam voluptate nobis sed dolore? Minima distinctio iusto recusandae maxime, rerum suscipit dicta aspernatur beatae!"
        />
        <Post 
          author="Ana Carvalho"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempora veniam voluptate nobis sed dolore? Minima distinctio iusto recusandae maxime, rerum suscipit dicta aspernatur beatae! Minima distinctio iusto recusandae maxime, rerum suscipit dicta aspernatur beatae! Minima distinctio iusto recusandae maxime, rerum suscipit dicta aspernatur beatae!"
        />
      </main>
    </div> 
    </>
  )
}

export default App
