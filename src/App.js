import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="navBar" />
        <Header className="navHeader"/>
      </header>

      <main className="App-main">
        <Main />
      </main>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
