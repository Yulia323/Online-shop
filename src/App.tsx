import './style.scss'
import React from 'react';
import {ProductList} from './pages/product-list';
import {Header} from './ui/header';

const App = () => {
  return (
    <main className="App">
      <Header/>
      <ProductList/>
    </main>
  )
}
export default App;
