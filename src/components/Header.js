import React from "react";
import LightsComponent from "./Lights";
import VerticalLights from "./VerticalLights";

function Header({ FaTree }) {
  return (
    <div className="header__primary-bkgrd">
      <LightsComponent num={38} />
      <div className="header__primary-bkgrd-lights">
        <div className="header__primary-bkgrd-lights-left">
          <VerticalLights num={10} />
        </div>
        <div className="header__primary-bkgrd-lights-right">
          <VerticalLights num={10} />
        </div>
      </div>
      <header className="header__primary">
        <div className="header__primary-logo">{/* <FaTree /> */}</div>
        <div className="header__primary center">
          <h1 className="header__primary-title">
            <span className="header__primary-title-main">Christmas</span>
            <span className="header__primary-title-sub">Dishes</span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
