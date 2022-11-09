import Movies from 'components/Movies/Movies';
import React, { useState } from 'react';
import './styles.css'; // have a look at this file and feel free to use the classes

export default function App() {
 
  return (
    <div className='container'>
      <h1>
        <span>
          <span role="img" aria-label="Popcorn emoji">
            🍿
          </span>{' '}
          Now playing
        </span>
      </h1>
     <Movies/>
    </div>
  );
}
