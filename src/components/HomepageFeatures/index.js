import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Industrial Electrical Cabinet',
    Svg: require('@site/static/img/tudienlanh.svg').default,
    description: (
      <>
        An Industrial Electrical Cabinet is a secure enclosure designed to house electrical components, including controllers and programmable logic controllers (PLCs), ensuring reliable and safe operation of automated systems in industrial environments.
      </>
    ),
  },
  // {
  //   title: 'Web Server',
  //   Svg: require('...').default,
  //   description: (
  //     <>
  //      A web server is a system that stores and serves web content to users when requested by the browser, through protocols such as HTTP/HTTPS. It processes and returns the HTML pages, images, or data needed to render the website.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Web User',
  //   Svg: require('...').default,
  //   description: (
  //     <>
  //      A web user is a user who accesses websites through a browser or web application. You will interact with the content on the website, such as reading information, viewing images, submitting forms, and using other features that the website provides.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
