import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Home*/}
      <Checkout></Checkout>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
