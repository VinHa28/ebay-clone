import './App.css';
import Header from './components/Header';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Home*/}
      <Product></Product>
      {/*Home*/}
    </div>
  );
}

export default App;
