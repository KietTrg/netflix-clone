import styled from "styled-components";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../untils";
import { useState, useEffect } from "react";
import { useViewPort } from "../hooks/useViewPort";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";

function MovieRow(props) {
  const { movies, title, isNetFlix, idSection } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [move, setMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [widowWidth] = useViewPort();
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  useEffect(() => {
    if (isDrag) {
      if (move < dragDown) {
        handleScrollRight();
      } else {
        handleScrollLeft();
      }
    }
  }, [dragDown, move, isDrag]);
  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
    document.addEventListener(
      "dragstart",
      function (event) {
        event.dataTransfer.setDragImage(
          event.target,
          window.outerWidth,
          window.outerHeight
        );
      },
      false
    );
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
    document.addEventListener(
      "dragstart",
      function (event) {
        event.dataTransfer.setDragImage(
          event.target,
          window.outerWidth,
          window.outerHeight
        );
      },
      false
    );
  };
  const onDragEnter = (e) => {
    setMove(e.screenX);
  };
  return (
    <MovieRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}, ${
                  widowWidth > 1200
                    ? "360px"
                    : widowWidth > 992
                    ? "300px"
                    : widowWidth > 768
                    ? "250px"
                    : "200px"
                }`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path != null) {
              let imageUrl = isNetFlix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleSetMovie(movie)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={imageUrl} alt="" draggable="false" />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
              );
            }
            return null; // Add a return statement to handle the case where the if condition is not met
          })}
      </MovieSlider>
      <div
        className={`btnLeft ${isNetFlix && "isNetFlix"}`}
        onClick={handleScrollLeft}
      >
        <VscChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetFlix && "isNetFlix"}`}
        onClick={handleScrollRight}
      >
        <VscChevronRight />
      </div>
    </MovieRowContainer>
  );
}
export default MovieRow;

const MovieRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }
`;
const MovieSlider = styled.div`
  display: grid;

  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }
  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
