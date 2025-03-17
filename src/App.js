import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Home*/}
      <Detail></Detail>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
