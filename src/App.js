import './App.css';
import Header from './layout/header/Header';
import Home from './layout/home/Home';

function App() {
  return (
    <>
    <Header/>
    <main className='main section global-width'>
      <Home/>
    </main>
    </>
  );
}

export default App;
