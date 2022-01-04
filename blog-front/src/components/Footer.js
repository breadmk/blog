import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="footer-copyright text-center py-3">
      <p>🔒 Creadted By BreadMk</p>
      <p>📞 010-1234-1234</p>
      <p>🏴 서울시 동대문구 이문동</p>
      <p>
        © 2021 Copyright:
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          BreadMk
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
