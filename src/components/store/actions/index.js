import axios from "axios";
import * as Types from "../types";

const API_KEY = "5eef6771e617c50d238d1e09f8e82f30";
const BASE_URL = " https://api.themoviedb.org/3";

export const getNetFlixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("lấy API lỗi", error);
  }
};
export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&&language=en-US`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API Trending lỗi", error);
  }
};

export const getTopMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-us`
    );
    dispatch({ type: Types.GET_TOP_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API TopRated lỗi", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API Action lỗi", error);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API Comedy lỗi", error);
  }
};

export const getHorroMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_HORRO_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API Horro lỗi", error);
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("lấy API Romance lỗi", error);
  }
};

export const getDocumentarieMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTARIE_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("lấy API Documentarie lỗi", error);
  }
};

export const setMovieDetail = (movie) => dispatch => {
  dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovies = (keywords) => async (dispatch) =>{
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&include_adult=false&language=en-US&query=${keywords}`
    )
    dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
  } catch (error) {
    console.log("lấy API SearchMovies lỗi", error);
  }
}
