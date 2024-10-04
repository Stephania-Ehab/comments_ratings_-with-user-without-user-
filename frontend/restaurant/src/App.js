//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';
import ProductDetails from './components/comments_rating/comments_rating.jsx';


function App() {
return (
        <Router>
            <Outlet>
                <Route path="/products/:id" component={ProductDetails} />
            </Outlet>
        </Router>


    );
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
}

export default App;
