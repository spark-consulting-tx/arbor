import React, { useEffect } from "react";

import {
  Container,
  Row,
} from "react-bootstrap";

interface AboutProps { 
  aboutId: string 
};

interface AboutConfig {
  thumbnail: string;
  title1: string;
  description1: string;
  description2: string;
}

export interface AboutData {
  us: AboutConfig;
  reviews: AboutConfig;
  story: AboutConfig;
}

const aboutData: AboutData = {
  "us": { "thumbnail": "house1.jpg",
                   "title1": "Why Choose Us?",
                   "description1": "We have been working in the Austin area for over 20 years and we stand by our work. We are detail-oriented and we use the highest quality materials to ensure your roofing, repairs, and painting needs are met beyond your expectations.",
                   "description2": "Placeholder to additional paragraph about guarantees, quality, etc., if wanted",
                 },
  "reviews":      { 
                   "thumbnail": "roofBlue.png",
                   "title1": "Customer Reviews",
                   "description1": "Reviews ...",
                   "description2": "More reviews ...",
                 },
  "story": { "thumbnail": "house2.png",
                   "title1": "Our Story",
                   "description1": "Jamie Gutierrez is a long-time Austin resident, working in roofing and painting for over 20 years. ",
                   "description2": "Placeholder for more story...",
                 },
}


const AboutPage: React.FC<AboutProps> = ( props: AboutProps) =>  {
  let ABOUT_US = "us";
  let ABOUT_REVIEWS = "reviews";
  let ABOUT_STORY = "story";

  let aboutId = ABOUT_US;
  let aboutConfig = aboutData.us;

  if (props.aboutId === ABOUT_REVIEWS) {
    aboutId = props.aboutId;
    aboutConfig = aboutData.reviews;
  } else if (props.aboutId === ABOUT_STORY) {
    aboutId = props.aboutId;
    aboutConfig = aboutData.story;
  } 

  let containerContrib = (<div />);
  if (aboutId !== ABOUT_REVIEWS) {
    containerContrib = (
      <Container>
        <Row>
            <p>{aboutConfig.description1}</p>
        </Row>
        <Row>
          <img
            className="d-block w-100"
            style={{display: "block", maxWidth: "580px", width: "auto", height: "auto", margin: "auto", marginTop: "20px"}}
            src={"static/images/" + aboutConfig.thumbnail}
            alt={aboutConfig.title1}
          />
        </Row>
      </Container>);
  } else {
    containerContrib = (
      <Container>
        <Row>
          <img
            className="d-block w-100"
            style={{display: "block", maxWidth: "580px", maxHeight: "426px", width: "auto", height: "auto", margin: "auto", marginTop: "20px", marginBottom: "20px"}}
            src={"static/images/review1.png"}
            alt={aboutConfig.title1}
          />
        </Row>
        <Row>
          <img
            className="d-block w-100"
            style={{display: "block", maxWidth: "580px", width: "auto", height: "auto", margin: "auto", marginTop: "20px"}}
            src={"static/images/" + aboutConfig.thumbnail}
            alt={aboutConfig.title1}
          />
        </Row>
      </Container>);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="p-3">
      <h1 className="header" style={{textAlign: "center"}}>{aboutConfig.title1}</h1>

    {containerContrib}

  </Container>

  );
};

export default AboutPage;
