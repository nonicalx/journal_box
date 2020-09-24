import React from "react";

const Header = (props) => {
  return (
    <div className="title d-flex justify-content-between align-items-center">
      <header>Journal Box</header>
      <i
        className="material-icons settings"
        onClick={() => {
          props.setOpenSetting(!props.openSetting);
        }}
      >
        settings
      </i>
    </div>
  );
};

export { Header };
