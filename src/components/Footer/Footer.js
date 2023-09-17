import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-module-sections">
          <div className="footer-top-section">
            <div className="address-section">
              <Image className={"log-img"} width={100} height={40} src="/vercel.svg" quality={100} alt="logo-image" />
              <div className="address">
                <p>513, Siddha Sabareesh Complex, Opp.Kovai Residency, 1st Street, Gandhipuram, Coimbatore - 12</p>
              </div>
            </div>

            <div className="page-link-section">
              <h3>Pages</h3>
              <div className="link-items">
                <Link href="/">Contact</Link>
                <Link href="/">Services</Link>
                <Link href="/">Reviews</Link>
                <Link href="/">Out Team</Link>
              </div>
            </div>
            <div className="services-sections">
              <h3>Services</h3>
              <div className="services-list">
                <Link href="/services">College Admissions</Link>
                <Link href="/services">Abroad Education</Link>
                <Link href="/services">Abroad Jobs </Link>
                <Link href="/services">Digital Marketing Services</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copy-rights">Copyright ©2023 All rights reserved</p>
            <p>Site by Kishore</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
