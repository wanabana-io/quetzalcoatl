import './sass/main.scss';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <div className='home-test'>
        <h1 className='home-test__title'>Prueba de fuentes</h1>
        <h2 className='home-test__cocogoose'>Esta es la fuente cocogoose</h2>
        <h2 className="home-test__roboto">Esta es la fuente de roboto</h2>
      </div>
    </>
  );
}

export default App;
