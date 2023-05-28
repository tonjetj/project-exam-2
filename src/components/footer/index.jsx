import React from "react";
import * as S from "./index.styles"
import logo from "../../assets/logo.png";

function Footer(){
    return (
            <S.Footer>
                <S.Logo src={logo} alt="Holidaze logo"/>
                <p>&copy;2023 Tonje T. Jenssen</p>
                </S.Footer>
    );
  };
  
  export default Footer;
  