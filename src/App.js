import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Home*/}
      <Detail></Detail>
      {/*Footer*/}
    </div>
  );
}

export default App;
