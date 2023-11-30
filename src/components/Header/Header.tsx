import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React, { FC } from 'react';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.wrapper}>
      {/*title and tagline*/}
      <div className={styles.container__content}>
        <div className={styles.container__text}>
          <h2 className={clsx(styles.text, styles['text--title'])}>
            {siteConfig.tagline}
          </h2>

          <p className={clsx(styles.text, styles['text--subtitle'])}>
            Through collaborative efforts, we strive to create tools,
            applications, and systems that empower individuals, uplift
            communities, and contribute to the greater good.
          </p>
        </div>
      </div>

      {/*attribution*/}
      <div className={styles.container__attribution}>
        <p className={clsx(styles.text, styles['text--attribution'])}>
          Image by{` `}
          <a
            href="https://pixabay.com/users/rauschenberger-4614580/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4619034"
            target="_blank"
          >
            RENE RAUSCHENBERGER
          </a>
          {` `}from{` `}
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4619034">
            Pixabay
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
