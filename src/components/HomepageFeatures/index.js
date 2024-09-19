import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "前往美容百科網站",
    image: require("./img/meta_image_1200x600.jpg").default,
  },
];

function Feature({ image, title }) {
  return (
    <div className={clsx("col col--8")}>
      <div className="text--center">
        <img src={image} className="w-100" />
      </div>
      <div className="text--center padding-horiz--md pt-2">
        <Heading as="h3">
          <Link
            href="https://beauty.kinglyrobot.com/"
            className={`button button--primary button--lg`}
          >
            {title}
          </Link>
        </Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row justify-content-center`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
