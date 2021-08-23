import Head from "next/head";
import * as React from "react";

import Page from "../../layouts/main";
import { H2 } from "../../components/typography/heading";
import P from "../../components/typography/paragraph";

const SamsaraTractorTrailerPage: React.FC = () => (
  <Page>
    <Head>
      <title>Samsara Tractor Trailer - Ken Chen</title>
    </Head>

    <div className="text-body">
      <H2 id="samsara-title">Samsara, Tractor-Trailer Async Worker</H2>
      <P>
        Hello! I am currently in the process of writing this article, exploring
        the technologies that used and the skills that I learned throughout the
        process. In the meantime, here is a brief <b>summary</b> of the project:
      </P>
      <P>
        A dry-van is typically comprised of both a tractor vehicle as well as
        the trailing container unit. Samsara creates IoT sensor devices for both
        the tractor and trailer units, enabling users to track the velocity, GPS
        location, and other statistics of their assets at all times.
      </P>
      <P>
        Tractors will switch between pulling various different trailers, so we
        devised an automated system to determine (with a high degree of
        confidence) which tractors were paired with which trailers at any point
        in time. With this, our customers can gain greater insight into their
        fleet easy navigate between associated tractor-trailer pairs within the
        web application.
      </P>
      <P>
        This project was accomplished by creating two new Golang microservices:
        a <b>persistent data server</b> and an{" "}
        <b>asynchronous background worker</b> that computes various heuristics
        (GPS and so on) to perform best-effort pairings. Due to the scale of
        computation--tens to hundreds of thousands of devices updating in
        real-time--designing a performant and future-proof means of
        accomplishing this was one of the most difficult obstacles I had to
        overcome.
      </P>
    </div>

    <style jsx>{`
      .text-body {
        display: block;
        max-width: 640px;
      }
    `}</style>
  </Page>
);

export default SamsaraTractorTrailerPage;
