import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Link } from '../styles/Timeline';

const ExperienceTimeline = () => {

  return (
    <Timeline lineColor={'#ddd'} style={{paddingTop: '0'}}>
      <TimelineItem
        key="001"
        dateText="Sep 2020 – Present"
        dateInnerStyle={{ background: 'rgb(47, 183, 236)', color: 'white' }}
        style={{ color: 'rgb(47, 183, 236)' }}
      >
        <h3>Wish - <i>Full Stack Software Engineer Intern</i></h3>
        <h4>Product Web</h4>
        <h5 style={{ paddingTop: '4px' }}>Python, MongoDB, ReactJS, Redux, GraphQL, Svelte</h5>
        <p>
          I'm currently interning at <Link href="https://www.wish.com/">Wish </Link> 
          as a full stack software engineer on the product web team. This term, I had the
          opportunity to prototype, design and implement the mobile UI for all <Link href="https://www.wish.com/press">wish press</Link> pages
          using Python and ReactJS.
        </p>
        <p>
          In addition to this, I built out several features supporting legal VAT requirements. I'm currently working on a new initiative
          building the infrastructure to support standalone marketplaces with Python, MongoDB, GraphQL and Svelte!
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="Jan 2020 – May 2020"
        dateInnerStyle={{ background: 'rgb(47, 183, 236)', color: 'white' }}
        style={{ color: 'rgb(47, 183, 236)' }}
      >
        <h3>Wish - <i>Full Stack Software Engineer Intern</i></h3>
        <h4>Product Web</h4>
        <h5 style={{ paddingTop: '4px' }}>Python, MongoDB, ReactJS, Redux, Treasure Data</h5>
        <p>
          In January 2020 I started my first internship at <Link href="https://www.wish.com/">Wish</Link> in San Francisco.
          I worked on building the completely responsive <Link href="https://www.wish.com/wish-reviews">Wish Reviews</Link> page from scratch with Python and ReactJS,
          integrating with Trustpilot's API and setting up cron jobs to routinely fetch and store reviews.
        </p>
        <p>
          I also built a storefront for wish local stores, allowing each store to showcase their unique products on the mobile and desktop site!
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="May 2019 – Sep 2019"
        dateInnerStyle={{ background: '#006fcf', color: 'white' }}
        style={{ color: '#006fcf' }}
      >
        <h3>American Express - <i>Software Engineer Intern</i></h3>
        <h4>International Insurance</h4>
        <h5 style={{ paddingTop: '4px' }}>Java, ReactJS, Spring Boot, AWS S3</h5>
        <p>
          In the summer of 2019, I started my internship at <Link href="https://americanexpress.com/">American Express</Link> in Toronto. At American Express
          I worked on developing a ProdOPs application to migrate, store and encrypt legal policy files using Java, Spring Boot, ReactJS and AWS S3.
          I also published several user services to American Express's cloud library, using Vert.x verticles.
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="Sep 2018 – Dec 2018"
        dateInnerStyle={{ background: '#f80000', color: 'white' }}
        style={{ color: '#f80000' }}
      >
        <h3>Oracle - <i>Software Developer Intern</i></h3>
        <h4>Application Management Service</h4>
        <h5 style={{ paddingTop: '4px' }}>Java, ReactJS, Spring Boot, Oracle Database, GraphQL</h5>
        <p>
          At <Link href="https://www.oracle.com/">Oracle</Link> I worked in a small team developing Oracle's Application Management Service, using Java, Spring Boot, ReactJS and GraphQL.
          I worked on several features, and was responsible for implementing a service allowing users to automatically install products to their applications. 
        </p>
      </TimelineItem>
      <TimelineItem
        key="005"
        dateText="Jan 2018 – May 2018"
        dateInnerStyle={{ background: '#94c949', color: 'white' }}
        style={{ color: '#94c949' }}
      >
        <h3>Ethoca - <i>Software Developer Intern</i></h3>
        <h5 style={{ paddingTop: '4px' }}>Java, Spring Boot, Apache Kafka, Chef, Jenkins</h5>
        <p>
          In the winter of 2018, I worked as a software developer at <Link href="https://www.ethoca.com/">Ethoca</Link>, primarily on the functionality of a microservice, using Java, Spring Boot, Apache Kafka and Chef.
          I added new functionality to the microservice with Kafka, and was responsible for automating the deployment and configuration of Vault instances across several development teams.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default ExperienceTimeline;