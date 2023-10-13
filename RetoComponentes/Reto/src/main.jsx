import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SearchBar from './searchBar';
import Card from './tarjeta';
import Article from './article';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SearchBar />
  <Article />
  </React.StrictMode>,
)
