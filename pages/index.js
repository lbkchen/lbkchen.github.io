import Link from "next/link";
import Head from "next/head";
import React from "react";

import Page from "../layouts/main";
import Fonts from "../components/fonts";
import Card from "../components/card";
import P from "../components/typography/paragraph";
import A from "../components/typography/link";
import theme from "../styles/theme";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Page>
        <Head>
          <title>Ken Chen</title>
        </Head>

        <div className="home">
          <div className="intro">
            <P>
              I am a <b>software engineer</b> from San Francisco working at{" "}
              <A href="https://www.samsara.com/">Samsara</A>. I’m also
              interested in UI/UX <b>design</b> and landscape/nightscape{" "}
              <b>photography</b>. Please see my{" "}
              <A href="/static/documents/ken-chen-resume.pdf">resume</A> and{" "}
              <A href="https://github.com/lbkchen">GitHub</A>, and contact me{" "}
              <A newTab={false} href="mailto:kenchen@berkeley.edu">
                here
              </A>{" "}
              for any inquiries!
            </P>
            <P>I’m currently in Tokyo, Japan until August 2019.</P>
          </div>
          <div className="gallery">
            <Link scroll={false} href="/projects/japan">
              <a>
                <Card
                  imgUrl="/static/images/thumbnails/arashiyama-bamboo.jpg"
                  leftText="JAPAN"
                  rightText="MAY '19"
                  title="PHOTOGRAPHY"
                  description="My favorite places and experiences during my 4 months abroad."
                />
              </a>
            </Link>

            <Link href="https://www.samsara.com/blog/introducing-wake-on-motion-for-unpowered-assets">
              <a target="_blank">
                <Card
                  imgUrl="/static/images/thumbnails/wake-on-motion.jpg"
                  leftText="IOT MOTION DETECTION"
                  rightText="MARCH '19"
                  title="FIRMWARE ENGINEERING INTERNSHIP"
                  description="At Samsara, I created a motion-detection feature to prevent large-asset theft."
                />
              </a>
            </Link>

            <Link scroll={false} href="/blog/samsara-tractor-trailer">
              <a>
                <Card
                  imgUrl="/static/images/thumbnails/tractor-trailer.jpg"
                  leftText="IOT ASYNC WORKER"
                  rightText="AUGUST '18"
                  title="SOFTWARE ENGINEERING INTERNSHIP"
                  description="At Samsara, I wrote a Go worker to ingest sensor data and detect vehicle-to-trailer proximity."
                />
              </a>
            </Link>

            <Link scroll={false} href="/projects/maui">
              <a>
                <Card
                  imgUrl="/static/images/thumbnails/maui.jpg"
                  leftText="MAUI"
                  rightText="APRIL '18"
                  title="PHOTOGRAPHY"
                  description="Beaches, mountains, stars, and an unforgettable sunrise atop Haleakalā."
                />
              </a>
            </Link>

            <Link scroll={false} href="/projects/hong-kong">
              <a>
                <Card
                  imgUrl="/static/images/thumbnails/hong-kong.jpg"
                  leftText="HONG KONG"
                  rightText="JANUARY '18"
                  title="PHOTOGRAPHY"
                  description="Beautiful urban architecture and nightscapes."
                />
              </a>
            </Link>

            <Link href="https://medium.com/blueprint/roots-of-success-1955f3a769e1">
              <a target="_blank">
                <Card
                  imgUrl="/static/images/thumbnails/roots-of-success.png"
                  leftText="ROOTS OF SUCCESS"
                  rightText="MAY '17"
                  title="WEB APPLICATION"
                  description="Led a team to create an online course-builder to digitalize RoS's curriculum."
                />
              </a>
            </Link>

            <Link href="https://www.behance.net/gallery/37619179/Indiegogo-Entrepreneur-Profile">
              <a target="_blank">
                <Card
                  imgUrl="/static/images/thumbnails/indiegogo.png"
                  leftText="INDIEGOGO"
                  rightText="MAY '16"
                  title="PRODUCT DESIGN"
                  description="Researched and created designs to improve the entrepreneur experience on the platform."
                />
              </a>
            </Link>
          </div>

          <div className="footer">
            <P>
              <b>Portfolio - Ken Chen</b>
              <br />
              6.9.2019
            </P>
          </div>
        </div>

        <style jsx>{`
          a {
            color: ${theme.colors.offBlack};
            text-decoration: none;
          }

          .home {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .intro {
            text-align: center;
            max-width: 500px;
            margin-bottom: 24px;
          }

          .gallery {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            max-width: 960px;
          }

          .footer {
            margin-top: 48px;
            text-align: center;
          }
        `}</style>

        {/* Janky descendants used here as a workaround */}
        <style jsx global>{`
          .page-transition-exit .card {
            transform: scale(1, 1);
          }

          .page-transition-exit-active .card {
            transform: scale(1.1, 1.1);
            transition: 300ms;
          }
        `}</style>
      </Page>
    );
  }
}

export default Index;
