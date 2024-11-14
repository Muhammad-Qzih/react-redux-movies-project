import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MoviesList from './components/MoviesList/MoviesList';
import NavBar from './components/NavBarComponent/NavBar';
import GlobalStyle from './styles/GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle /> 
      <div className="font color-body">
        <NavBar />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </>
  );
}

export default App;
