import React from "react";

const SettingBar = (props) => {
  return (
    <div className={props.openSetting ? "setting_bar" : "set_bar"}>
      <div>
        <i className="material-icons pb-3">color_lens</i>
        <i className="material-icons">format_list_bulleted</i>
      </div>
    </div>
  );
};

export { SettingBar };
