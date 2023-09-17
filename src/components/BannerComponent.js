import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import "./BannerComponent.scss";
import Link from "next/link";
import techImage from "../images/tech.jpg";

const BannerComponent = ({ bannerData }) => {
  const bannerImg = bannerData?.attributes?.banner_image?.data?.attributes?.url;

  return (
    <div className="banner-wrapper">
      <div className="banner-section">
        <Container>
          <div className="banner-two-sections">
            <div className="banner-content">
              <h1 className="title">{bannerData?.attributes?.banner_title}</h1>
              <p>{bannerData?.attributes?.description}</p>
              <div className="ctas">
                <Link href="/contact">
                  <button className="button button-pink">{bannerData?.attributes?.cta_label1}</button>
                </Link>
                <Link href="/services">
                  <button className="button button-outline">{bannerData?.attributes?.cta_label2}</button>
                </Link>
              </div>
            </div>
            <div className="desktop-banner-img">
              <Image alt="banner-content-image" src={techImage} width={480} height={320} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
