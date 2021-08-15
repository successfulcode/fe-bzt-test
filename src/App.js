import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='App container'>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default App;
