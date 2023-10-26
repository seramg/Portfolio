import './App.css';
import About from './layout/about/About';
import Header from './layout/header/Header';
import Home from './layout/home/Home';

function App() {
  return (
    <>
    <Header/>
    <main className='main section global-width'>
      <Home/>
      <About/>
    </main>
    </>
  );
}

export default App;
