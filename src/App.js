import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Home*/}
      <Home></Home>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
