import './App.css';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import Menu from '../src/components/Menu';
import Footer from '../src/components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
