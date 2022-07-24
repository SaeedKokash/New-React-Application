import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>

      <main className="App-main">
          <Main className="mainItem" title="UniWhal" imgLink="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" imgAlt="UniWhal" imgtitle="UniWhal"
          description="A unicorn and a narwhal nuzzling their horns"/>

          <Main title="Rhino Family" imgLink="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" imgAlt="Rhino Family" imgtitle="Rhino Family"
          description="Parent rhino with two babies"/>

          <Main title="Unicorn Head" imgLink="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" imgAlt="Unicorn Head" imgtitle="Unicorn Head"
          description="Someone wearing a very silly unicorn head mask"/>
      </main>

      <footer className="App-footer">
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
