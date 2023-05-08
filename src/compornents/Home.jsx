import React from "react";
import Styled from "styled-components";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import Logo from "../image/shutanoue.jpg";

const About = () => {
  return (
    <Styles>
      <div className="index_about">
        <div className="index_about_profile">
          <img src={Logo} alt="Logo" className="index_image_shu" />
          <h1 className="index_image_text">
            Hi,I'm Shu Tanoue
            <br />a Frontend developer
          </h1>
        </div>
        <div className="index_about_smaillskills">
          <div className="index_about_skills">
            <div className="index_about_flex">
              <h1 className="index_about_title">Specialists:</h1>
              <div className="index_about_flex2">
                <div className="index_about_react">
                  <GrReactjs style={{ color: "#61DBFB" }} />
                </div>
                <div className="index_about_javascript">
                  <IoLogoJavascript style={{ background: "#F7DF1E" }} />
                </div>
              </div>
            </div>
          </div>
          <p className="index_about_subskills">
            {" "}
            Other skills:
            <br />
            languages Node.js, Scss/Sass, CSS3, HTML5 Frameworks
            <br />
            Next.js, Redux,styled-components Others
            <br />
            Firebase, MongoDB, Figma
          </p>
        </div>
        <div className="index_about_second">
          <div className="index_about_second_text">
            <h1 style={{ color: "#fff" }}> Software development</h1>
            <p style={{ color: "#fff" }}>
              I’m developing web apps using HTML5, CSS3, SCSS, JavaScript,
              React, and Redux. Especially I’ve been putting much effort into
              developing with React. I keep brushing up my developing skills.
            </p>
          </div>
          <div className="index_about_second_text">
            <h1 style={{ color: "#fff" }}>My passion</h1>
            <p style={{ color: "#fff" }}>
              coding and designing. I get a sense of satisfaction and joy
              whenever what I create brings others happiness.
            </p>
          </div>
          <div className="index_about_second_text">
            <h1 style={{ color: "#fff" }}> Traveling</h1>
            <p style={{ color: "#fff" }}>
              Love to off to new world! Of all the countries I have visited,
              Laos and Vietnam are my favorite!{" "}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="index_about_text">
        <h1 className="index_about_descriptiontet"> Software development</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita praesentium corrupti facilis, nulla ducimus. Veniam laboriosam corrupti animi ipsam sapiente! Eligendi dolorem accusamus laborum neque quae temporibus, culpa delectus!</p>
        </div>
        <div className="index_about_text">
        <h1 className="index_about_descriptiontet"> Software development</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita praesentium corrupti facilis, nulla ducimus. Veniam laboriosam corrupti animi ipsam sapiente! Eligendi dolorem accusamus laborum neque quae temporibus, culpa delectus!</p>
        </div>
        <div className="index_about_text">
        <h1 className="index_about_descriptiontet"> Software development</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita praesentium corrupti facilis, nulla ducimus. Veniam laboriosam corrupti animi ipsam sapiente! Eligendi dolorem accusamus laborum neque quae temporibus, culpa delectus!</p>
        </div> */}
    </Styles>
  );
};

const Styles = Styled.div`
.index_about{
    width: 100vw;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;

  }
  .index_about_profile{
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
    border-radius: 25%;
    margin-right: 2.5rem;
    object-fit: cover;
}
.index_image_text{
   font-size: 3.5rem;
    color: #fff;
        padding-right: 8rem;
}
.index_about_title{
  color: #fff;
  display: flex;
  text-align: center;
  margin: 0 auto;
  margin: 0 auto;
  font-size: 3rem;
     
}

.index_about_skills{
  display: flex;
  font-size: 8rem;
  justify-content: center;
  padding-top: 2rem;
  margin-right: 1.2em;
  padding-top: 5rem;


  
}
.index_about_flex{
  dispaly: flex;
}
.index_about_react{
  padding-right: 3rem;
　
}
.index_about_flex2{
  display: flex;
      margin-left: 4rem;
}
.index_about_subskills{
       color: #fff;
        font-size: 2.5rem;
    position: relative;
    bottom: 3.6rem;
}
}
.index_about_smaillskills{
  display: flex;
  justify-content: center;
      max-width: 1200px;
      margin: 0 100px 0 100px;
}
.index_about_text{
  color: #fff;
  text-align: center;
}
.index_about_second{
   width: 100vw;
   height: auto;
   max-width: 1200px;
   margin: 0 auto;
 
}
.index_about_second_text{
  margin:0 100px 0 100px;
  h1{
    font-size: 2rem;
    padding-bottom: 0.5rem;
    padding-top: 3rem;
}
}
  }
}


`;

export default About;
