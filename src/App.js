
import './App.css';
import NavBar from './components/screen/NavBar';
import Welcome from './components/screen/Welcome';
import Information from './components/screen/Information';
import Footer from './components/screen/Footer';
import FrontEnd from './components/screen/FrontEnd'
import Background from './components/assets/img/cool-background.svg'


function App() {
  return (
    <div className="App">
      <section className='Header'> 
        <NavBar/>
        <img className='img-background' src={Background} alt='background'></img>
        <Welcome/>
      </section>
      <section className='Main'>
        <Information/>
        <FrontEnd/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
