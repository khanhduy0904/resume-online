import React from "react";
import { Button } from "@material-ui/core";
import "./style.scss";
function CustomButton({ text, icon,link, href }) {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      linkDemo={link}
      href={href}
    >
      {
        link ? <a href ="#" className="linkProject"><span className="btn-text">{text}</span></a> :  <span className="btn-text">{text}</span>
      }
      {/* <span className="btn-text">{text}</span> */}
     
    </Button>
  );
}

export default CustomButton;
