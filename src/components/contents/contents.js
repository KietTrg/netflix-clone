import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./movieRow";
import { useEffect } from "react";
import * as ACTIONS from "../store/actions";
import {TfiArrowCircleUp} from 'react-icons/tfi'
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import {useScrollY} from '../hooks'


const SrcollToTop = () =>{
  scroll.scrollToTop()
}
function Contents(props) {
  const [srcollY] = useScrollY()
  const dispatch = useDispatch();
  const { NetFlixOriginals, TrendingMovies, TopMovies, ActionMovies, ComedyMovies, HorroMovies, RomanceMovies, DocumentarieMovies } = useSelector(
    (state) => state.infoMovies
  );

  useEffect(() => {
    dispatch(ACTIONS.getNetFlixOriginals());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopMovies());
    dispatch(ACTIONS.getActionMovies())
    dispatch(ACTIONS.getComedyMovies());
    dispatch(ACTIONS.getHorroMovies());
    dispatch(ACTIONS.getRomanceMovies());
    dispatch(ACTIONS.getDocumentarieMovies())

  }, [dispatch]);

  return (
    <div>
      <MovieRow
        movies={NetFlixOriginals}
        title="NetFlix Originals"
        isNetFlix={true}
        idSection='Home'
      />
      <MovieRow movies={TrendingMovies} title="Trending Movie" idSection='Trending'/>
      <MovieRow movies={TopMovies} title="Top Movie" idSection='TopMovie'/>
      <MovieRow movies={ActionMovies} title="Action Movie" idSection='ActionMovie'/>
      <MovieRow movies={ComedyMovies} title="Comedy Movie" idSection='ComedyMovie'/>
      <MovieRow movies={HorroMovies} title="Horro Movie" idSection='HorroMovie'/>
      <MovieRow movies={RomanceMovies} title="Romance Movie" idSection='RomanceMovie'/>
      <MovieRow movies={DocumentarieMovies} title="Documentarie" idSection='DocumentariesMovie'/>

      <GotoTop onClick={()=> SrcollToTop()}
      style={{
        visibility: `${srcollY > 600 ? 'visible':'hidden'}`
      }}>
        <TfiArrowCircleUp/>
      </GotoTop>
    </div>
  );
}
export default Contents;
const GotoTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 30px;
  font-size: 50px;
  color: rgba(255,255,255,0.4);
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover{
    color: rgba(255,255,255,0.8);
  }
  @media screen and (max-width: 600px){
    right: 40px;
  }

`;