import React from 'react';

import Header from './components/Header/Header';
import AppRouter from './scenes/AppRouter';
import Footer from './components/Footer/Footer';
class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    )
  }
}

export default App;
