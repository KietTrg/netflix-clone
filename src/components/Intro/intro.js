import ReactPlayer from "react-player";
import { VscUnmute, VscMute } from "react-icons/vsc";
import styled from "styled-components";
import { useState } from "react";
function Intro(props) {
  const [muted, setMuted] = useState(true);
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={muted}
        url="https://vimeo.com/644494272"
        className="videoIntro"
      />
      <div className="introInfo">
        <h2 className="headingIntro">Netflix + Endesa</h2>
        <p className="overviewIntro">
          Dir Pablo Maestres & Eric Morales Prod Co. Primo Content Spain Client
          Endesa & Netflix Shot in Madrid on Sony Venice Leica R lenses , also
          Sony FX3 FX6 footage and Laowa lens probe.
        </p>
      </div>
      {muted ? (
        <VscMute
          className="btnVolume"
          onClick={() => setMuted((pre) => !pre)}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => setMuted((pre) => !pre)}
        />
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}
export default Intro;
const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-white);
  padding-top: 60%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }
  .introInfo {
    position: absolute;
    top: 130px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: 1px #fff solid;
    transition: all 0.3 ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }
      @media screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
        padding: 4px;
      }
      @media screen and (max-width: 600px) {
        width: 20px;
        height: 20px;
        padding: 1px;
      }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
