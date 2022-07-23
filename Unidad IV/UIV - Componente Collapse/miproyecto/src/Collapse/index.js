import React, { useState } from "react";
import css_styles from "./Collapse.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const Collapse = (props) => {
  const { title, children } = props;

  const [active, setActive] = useState(true);

  const stateHandler = () => {
    active ? setActive(false) : setActive(true);
  };

  let toDisplay = active ? "" : css_styles.hide;
  console.log(children);
  return (
    <div className={css_styles.overlay}>
      <div className={css_styles.modal}>
        <div className={css_styles.modal_title}>
          <div>{title}</div>

          {active ? (
            <AiFillCaretUp onClick={() => stateHandler()} size={25} />
          ) : (
            <AiFillCaretDown onClick={() => stateHandler()} size={25} />
          )}
        </div>
        <div className={toDisplay + " " + css_styles.collapse_content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
