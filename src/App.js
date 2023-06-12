import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Contents from "./components/contents/contents";
// import Menu from "./components/Menu/menu";
import MoviesDetail from "./components/movieDetail/moviesDetail";
import { useSelector } from "react-redux";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";
function App() {
  const {MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/search" element={<Search/>}></Route>

      </Routes>
      </BrowserRouter>
      {/* <Home/> 
      {/* <SearchMovies/>  
      {/* <Intro></Intro>
      <Contents />
      <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false}/> 
      {/* <Menu /> */}
    </div>
  );
}

export default App;
