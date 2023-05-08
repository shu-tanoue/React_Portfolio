import React from "react";
import Styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const JumplinkdIn = () => {
  window.open("https://www.linkedin.com/in/shu-tanoue-0099/", "_blank");
};
const JumpGit = () => {
  window.open("https://github.com/shu-tanoue", "_blank");
};

const Footer = () => {
  return (
    <Styles>
      <div className="index_about_second_message">
        <h1>Message me</h1>

        <div className="index_about_second_works">
          <div className="index_about_second_position">
            <AiFillLinkedin
              onClick={JumplinkdIn}
              className="index_about_second_sns"
            />
            <AiFillGithub
              onClick={JumpGit}
              className="index_about_second_sns2"
            />
          </div>
          <div className="index_about_second_logos">/ Resume</div>
        </div>
      </div>
    </Styles>
  );
};
const Styles = Styled.div`
.index_about_second_message {
  width: 100vw;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 100px 0 100px;
  color: #fff;
  h1{
    font-size: 2rem;
 padding-bottom: 0.5rem;
 padding-top: 3rem;
}
}
}
  }
  .index_about_second_mail{
    font-size: 4rem;
    
  }

}
.index_about_second_works{
  display: flex;
  font-size: 5rem;
  padding-top: 2rem;
}
.index_about_second_logos{
  color: #fff;
}
.index_about_second_sns{
  margin-right: 20px;
  background: none;
  
}
.index_about_second_sns2{
  margin-right: 20px;
}
`;
export default Footer;
