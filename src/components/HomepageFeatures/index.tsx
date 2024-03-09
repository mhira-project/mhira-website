import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built to address the global mental health care gap',
    Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        In a world where most mental health problems remain undetected, we 
        aim to strengthen the coverage and precision of mental health evaluation.       </>
    ),
  },
  {
    title: 'Adapt MHIRA to the needs of your service',
    Svg: require('@site/static/img/gears.svg').default,
    description: (
      <>
        MHIRA allows integrating psychometric questionnaires and creating customised reports.
      </>
    ),
  },
  {
    title: 'Supports mental health care workers',
    Svg: require('@site/static/img/handshake.svg').default,
    description: (
      <>
        This project was designed together with front-line health 
        care workers whose primary objective it is  to care for their patients.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
