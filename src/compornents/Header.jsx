import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Switch } from "@syncfusion/ej2-buttons";

let switchObj = new Switch({ checked: true });
switchObj.appendTo("#switch1");

switchObj = new Switch({ checked: false });
switchObj.appendTo("#switch2");

switchObj = new Switch({ disabled: true, checked: false });
switchObj.appendTo("#disabled");

const Header = () => {
  const [t, i18n] = useTranslation();

  return (
    <Styles>
      <nav className="index_nav">
        <div className="index_nav_max-width">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="index_header_logo"
          >
            <h3>S</h3>
          </Link>
          <ul className="index_nav_links">
            <Link to="./About" style={{ textDecoration: "none" }}>
              <li className="index_nav_li">About</li>
            </Link>
            <Link to="./Work" style={{ textDecoration: "none" }}>
              <li className="index_nav_li">Work</li>
            </Link>
            <div class="cp_ip_select cp_sl01">
              <select
                required
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </ul>
        </div>
      </nav>
    </Styles>
  );
};

const Styles = Styled.div`

.index_nav{
width: auto;
height: auto;
background: #0D1117;
color: white;
 max-width: 1200px;
 margin: 0 auto;
 height: 10vh;
 padding-top: 30px;
 padding-right: 40px;
 padding-left: 40px;

}
.index_nav_max-width{
    max-width:1200px;
    margin: 0 auto;
  
  
}
.index_nav_links{
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 1.5rem;
    position: absolute;
    right: 0;
    width: 40%;
}
}
}

.index_nav_li{
    
    color: #FFFFFF;
    font-family: 'RocknRollOne';
    font-weight: 800;
}

.index_header_logo{
    font-size: 60px;
    color: #41E661;
    font-family: 'Leckerli One', cursive;
    transform: rotate(25deg);
    position: absolute;
    top: 0px;
    
}
`;
export default Header;
