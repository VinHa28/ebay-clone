import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import ProductCartList from './components/ProductCartList'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductCartList></ProductCartList>
      <Footer></Footer>
    </div>
  );
}

export default App;
