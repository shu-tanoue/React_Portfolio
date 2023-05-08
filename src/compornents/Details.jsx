import React from "react";
import Styled from "styled-components";
import Logo4 from "../image/secondportfolio.png";

const JumpWebSite = () => {
  window.open("https://shutanoue.com/", "_blank");
};
const JumpGit = () => {
  window.open("https://github.com/shu-tanoue", "_blank");
};

const Details = () => {
  return (
    <Styles>
      <div className="index_details">
        <div className="index_details_img">
          <img src={Logo4} alt="Logo" className="index_details_size" />
          <div className="index_details_button">
            <button
              onClick={JumpWebSite}
              className="index_work_buttonDetailsIn"
            >
              <h1 className="index_work_font">Visit website</h1>
            </button>
            <button onClick={JumpGit} className="index_work_buttonDetailsIn">
              <h1 className="index_work_font">View GitHub</h1>
            </button>
          </div>
        </div>

        <div className="index_details_text">
          <h1>Why I choose this design?</h1>
          <p>
            Jot down is a bookmark and note web service. You can save some your
            favorite website or article to Jot down. Also you can write a note
            with your bookmark.
          </p>
        </div>
        <div className="index_details_text">
          <h1>Why I created this app?</h1>
          <p>
            To manage a lot of bookmarks easily. I have been using chrome
            bookmark manager but sometimes I can’t find the bookmark that I’m
            looking for. Then I often commented on bookmarks and saved them in
            Slack to remember what bookmark is, but also it’s difficult to find
            it again. Jot down was born to solve these problems.
          </p>
        </div>
        <div className="index_details_text">
          <h1>Technologies</h1>
          <p>Developed all of the service, frontend and design.</p>
        </div>
        <div className="index_details_text index_details_info">
          ・Language: jQuery, CSS, HTML
          <br />
          ・Infrastructure: Netlify
          <br />
          ・Others: none
          <br />
        </div>
      </div>
    </Styles>
  );
};
const Styles = Styled.div`

.index_details{
    width: 100vw;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;
  }
  .index_details_img{
      padding-top: 5rem;
      img{
        height: 600px;
        width: 1000px;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        border-radius: 10px;
      }
  }
  .index_details_text{
    margin: 60px 110px 10px 110px;
    h1{
        font-size: 3rem;
    }
  }
  .index_details_info{
      font-size: 2rem;
  }
  .index_work_buttonDetailsIn {
    background: #41E661;
    border: none;
    font-size: 2.3rem;
    margin: 4.5rem 2rem 0 2rem;
    color: #fff;
    border-radius: 10px;
    
  }
  .index_details_button{
    justify-content: center;
    margin: 0 auto;
    display: flex;
  }
`;
export default Details;
