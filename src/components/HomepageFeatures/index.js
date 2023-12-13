import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'GoldenPay',
    Svg: require('@site/static/img/ipay.svg').default,
    description: (
      <>
          <code>GoldenPay</code> represents an exciting and dynamic experiment in which I've
          delved deep into the realm of backend development, serving as an
          invaluable platform for me to acquire, hone, and apply my technical
          skills and knowledge, with the aim of continually enhancing my
          expertise in this domain.
      </>
    ),
  },
  {
    title: 'My Learning',
    Svg: require('@site/static/img/my_learning.svg').default,
    description: (
      <>
          <code>My Learning</code> serves as the dedicated space where I wholeheartedly and
          enthusiastically engage in the art of knowledge dissemination,
          allowing me to share my profound insights, experiences, and
          discoveries acquired throughout my enriching learning journey, thus
          fostering a vibrant exchange of ideas with others.
      </>
    ),
  },
    {
        title: 'Contact',
        Svg: require('@site/static/img/contact.svg').default,
        description: (
            <>
                Should you find yourself in need of any assistance or have any
                inquiries, please do not hesitate to get in touch with me through
                <Link href="https://discord.gg/kt3n4gKH">
                    &nbsp;Discord
                </Link> or
                <Link to="https://www.linkedin.com/in/chien-tran-thien-529360137/">
                    &nbsp;Linkedin
                </Link>
                , where I am readily available to provide support
                and answers to your questions.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
