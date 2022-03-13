import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto:support@projectvuovos.org">
            Email us with your feedback
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
