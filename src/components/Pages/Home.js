import React from "react";
import Intro from "../Intro/intro";
import Contents from "../contents/contents";
import MoviesDetail from "../movieDetail/moviesDetail";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const { MovieDetail } = useSelector(state => state.infoMovies);
  const [isShowMovieDetail, setIsShowDetail] = useState(false)
  useEffect(()=>{
    setIsShowDetail(MovieDetail ? true : false)
  },[MovieDetail])
  return (
    <div>
      <Intro />
      <Contents />
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail}
      />
    </div>
  );
}
export default Home;
