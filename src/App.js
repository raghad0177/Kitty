//import logo from './logo.svg';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';





function App() {
  return (

    <>
      <NavBar />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;