import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Jumbotron />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;
