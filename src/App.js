import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
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
