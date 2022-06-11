import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css'
import CounterDown from './components/CounterDown';
import FooterComponent from './components/Footer';
import TitleComponent from './components/Title';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Container'>
      <TitleComponent/>
      <CounterDown/>
      <FooterComponent/>
    </div>
  </React.StrictMode>
);
