import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import data from "./components/data.json";
import React, { Component } from 'react';
import SelectedBeast from './components/SelectedBeast';
import ModalForm from './components/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
      selectedBeast: {},
      showModal: false
    }
  }

  displayModal = (beast) => {

    let result = this.state.animalData.find(item => item.title === beast.title)
    this.setState({
      showModal: true,
      selectedBeast: result
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  hornFilter = (e) => {
      const hornNumber = parseInt(e.target.value);
      let filteredData = data;
      if(hornNumber) {
        filteredData = data.filter(item => item.horns === hornNumber);
      }
    this.setState({animalData: filteredData})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header className="navHeader" />
        </header>

        <ModalForm hornFilter={this.hornFilter}/> 

        <main className="App-main">
          
          <Main animalData={this.state.animalData} displayModal={this.displayModal} />
          <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        </main>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
