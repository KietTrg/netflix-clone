import * as Types from "../types";
const reducerMovieInitialState = {
  NetFlixOriginals: null,
  TrendingMovies: null,
  TopMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorroMovies: null,
  RomanceMovies: null,
  DocumentarieMovies: null,
  MovieDetail: null,
  SearchMovies: null,
};

const reducerMovie = (state = reducerMovieInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_NETFIX_ORIGINALS:
      console.log("netfix", payload);
      return { ...state, NetFlixOriginals: payload };
    case Types.GET_TRENDING_MOVIES:
      console.log("trending", payload);
      return { ...state, TrendingMovies: payload };
    case Types.GET_TOP_MOVIES:
      console.log("top", payload);
      return { ...state, TopMovies: payload };
    case Types.GET_ACTION_MOVIES:
      console.log("ActionMovies", payload);
      return { ...state, ActionMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      console.log("ComedyMovies", payload);
      return { ...state, ComedyMovies: payload };
    case Types.GET_HORRO_MOVIES:
      console.log("HorroMovies", payload);
      return { ...state, HorroMovies: payload };
    case Types.GET_ROMANCE_MOVIES:
      console.log("RomanceMovies", payload);
      return { ...state, RomanceMovies: payload };
    case Types.GET_DOCUMENTARIE_MOVIES:
      console.log("DocumentarieMovies", payload);
      return { ...state, DocumentarieMovies: payload };
    case Types.SET_MOVIE_DETAIL:
      console.log("MovieDetail", payload);
      return { ...state, MovieDetail: payload };
      case Types.GET_SEARCH_MOVIES:
      console.log("SearchMovies", payload);
      return { ...state, SearchMovies: payload };
    default:
      return state;
  }
};
export default reducerMovie;
