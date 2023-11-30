import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import AboutSection from '@site/src/components/AboutSection';
import Header from '@site/src/components/Header';
import Main from '@site/src/components/Main';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const description: string = `Through collaborative efforts, Agora Labs strives to create tools, applications, and systems that empower individuals, uplift communities, and contribute to the greater good.`;

  return (
    <Layout title={siteConfig.tagline} description={description}>
      <Header />

      <Main>
        <AboutSection variant="accent" />
      </Main>
    </Layout>
  );
};

export default IndexPage;
