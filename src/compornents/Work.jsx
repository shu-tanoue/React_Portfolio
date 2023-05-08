import React from "react";
import Styled from "styled-components";
import Logo2 from "../image/secondportfolio.png";
import Logo3 from "../image/toiletmap.png";
import Logo4 from "../image/lacrosse.png";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Works = () => {
  const JumpGit = () => {
    window.open("https://github.com/shu-tanoue", "_blank");
  };
  const JumpWeb = () => {
    window.open("https://shutanoue.com", "_blank");
  };
  return (
    <Styles>
      <div className="index_work">
        <div className="index_work_cards">
          <img src={Logo2} alt="Logo" className="index_image_shu" />
          <div className="index_work_text">
            <h1 className="index_work_title">Second Portfolio</h1>
            <div className="index_work_box">
              <h2 className="index_work_subtext">jQuery/CSS/HTML</h2>
              <span className="index_work_flex">
                <AiFillGithub onClick={JumpGit} />
              </span>
              <h1 className="index_work_gitHub">GitHub</h1>
            </div>
            <p className="index_work_left">
              A YouTube clone application using React. You can search videos by
              keywords and play the video that you choose on this platform.
            </p>
            <button className="index_work_buttonDetails">
              <Link to="./Details" label="Details">
                <h1 className="index_work_font">More details</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="index_work">
        <div className="index_work_cards">
          <img src={Logo3} alt="Logo" className="index_image_shu" />
          <div className="index_work_text">
            <h1 className="index_work_title">Washroom Map</h1>
            <div className="index_work_box">
              <h2 className="index_work_subtext">React Hooks /context API</h2>
              <span className="index_work_flex">
                <AiFillGithub onClick={JumpGit} />
              </span>
              <h1 className="index_work_gitHub">GitHub</h1>
            </div>
            <p className="index_work_left">
              Vancouver washroom maps and washroom list website as an owned
              media using React.js, Bootstrap, HTML, CSS, Sass, JavaScript, and
              Google Maps API
            </p>

            <button className="index_work_buttonDetails">
              <h1 className="index_work_font">More details</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="index_work">
        <div className="index_work_cards">
          <img src={Logo4} alt="Logo" className="index_image_shu" />
          <div className="index_work_text">
            <h1 className="index_work_title">Pro Caliber Lacrosse</h1>
            <div className="index_work_box">
              <h2 className="index_work_subtext">React Hooks /context API</h2>
              <span className="index_work_flex">
                <AiFillGithub onClick={JumpGit} />
              </span>
              <h1 className="index_work_gitHub">GitHub</h1>
            </div>
            <p className="index_work_left">
              A client project for a pro lacrosse team website created by team
              development.
            </p>
            <button onClick={JumpWeb} className="index_work_buttonDetails">
              <h1 className="index_work_font">More details</h1>
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = Styled.div`
.index_work{
    width: 100vw;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;

  }
  .index_work_cards{
    display:flex;
    justify-content:center; 
    align-items: center; 
    margin: 0 auto;
    padding: 30px 0 0 0;
}
  .index_image_shu{
    width: 500px;
    height: 500px;
    padding: 50px;
    border-radius: 13%;
    margin-right: 2.5rem;

}
.index_work_title{
  font-size: 4rem;
    color: #fff;

}
.index_work_cards{
  color: #fff;
  display: flex;
  text-align: center;
  margin: 0 auto;     
}
.index_work_text{
    color: #fff;
  
}
.index_work_subtext{
  padding-right: 0.3rem;
  font-size: 1.5rem;
}
.index_work_box{
    display: inline-flex;  
}
.index_work_left{
    text-align: left;
    font-size: 1.3rem;
}
.index_work_gitHub{
  padding-top: 0.25rem;
  padding-left: 0.3rem;
}
.index_work_flex{
  padding-left: 2rem;
  font-size: 2rem;
  margin-top: -6px;
}
.index_work_buttonDetails {
  background: #41E661;
  border: none;
  font-size: 2.3rem;
  margin: 4.5rem 2rem 0 2rem;
  color: #fff;
  border-radius: 10px;
  
}
.index_work_buttonWeb h1{

}




`;

export default Works;
