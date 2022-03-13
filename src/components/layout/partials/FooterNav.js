import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto:contact@projectvuovos.org">
            Email us at contact@projectvouvos.org
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
