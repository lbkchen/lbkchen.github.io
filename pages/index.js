import Link from "next/link";
import Head from "next/head";

import Page from "../layouts/main";
import Card from "../components/card";
import P from "../components/typography/paragraph";
import A from "../components/typography/link";

export default () => (
  <Page>
    <Head>Ken Chen</Head>

    <div className="home">
      <div className="intro">
        <P>
          I am a <b>software engineer</b> from San Francisco working at Samsara.
          I’m also interested in UI/UX <b>design</b> and landscape/nightscape{" "}
          <b>photography</b>. Please see my <A>resume</A>, and contact me{" "}
          <A>here</A> for any inquiries!
        </P>
        <P>I’m currently in Tokyo, Japan until August 2019.</P>
      </div>
      <div className="gallery">
        <Card
          imgUrl="/static/images/thumbnails/tokyo-icu.jpg"
          leftText="JAPAN"
          rightText="May '19"
          title="PHOTOGRAPHY"
          description="My favorite places and experiences during my 4 months abroad."
        />
        <Card
          imgUrl="/static/images/thumbnails/wake-on-motion.jpg"
          leftText="IOT MOTION DETECTION"
          rightText="MARCH '19"
          title="FIRMWARE ENGINEERING INTERNSHIP"
          description="At Samsara, I created a motion-detection feature to prevent large-asset theft."
        />
        <Card
          imgUrl="/static/images/thumbnails/tractor-trailer.jpg"
          leftText="IOT ASYNC WORKER"
          rightText="AUGUST '18"
          title="SOFTWARE ENGINEERING INTERNSHIP"
          description="At Samsara, I wrote a Go worker to ingest sensor data and detect vehicle-to-trailer proximity."
        />
        <Card
          imgUrl="/static/images/thumbnails/maui.jpg"
          leftText="MAUI"
          rightText="APRIL '18"
          title="PHOTOGRAPHY"
          description="Beaches, mountains, stars, and an unforgettable sunrise atop Haleakalā."
        />
        <Card
          imgUrl="/static/images/thumbnails/hong-kong.jpg"
          leftText="HONG KONG, SINGAPORE"
          rightText="JANUARY '18"
          title="PHOTOGRAPHY"
          description="Beautiful urban architecture and nightscapes."
        />
        <Card
          imgUrl="/static/images/thumbnails/roots-of-success.png"
          leftText="ROOTS OF SUCCESS"
          rightText="MAY '17"
          title="WEB APPLICATION"
          description="Led a team to create an online course-builder to digitalize RoS's curriculum."
        />
        <Card
          imgUrl="/static/images/thumbnails/indiegogo.png"
          leftText="INDIEGOGO"
          rightText="MAY '16"
          title="PRODUCT DESIGN"
          description="Researched and created designs to improve the entrepreneur experience on the platform."
        />
        <Card
          leftText="NIGHTSCAPES AND STARS"
          rightText="JUNE '16"
          title="PHOTOGRAPHY"
          description="An exploration of low-light photography in Shanghai, China."
        />
      </div>
    </div>

    <style jsx>{`
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
        justify-content: space-between;
        max-width: 960px;
      }
    `}</style>
  </Page>
);