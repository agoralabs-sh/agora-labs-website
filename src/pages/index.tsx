import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import Header from '@site/src/components/Header';
import Main from '@site/src/components/Main';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const description: string = `Step into a world where your digital assets become more than just holdings - Welcome to Kibisis, your ultimate utility wallet tailored to harness the true potential of your AVM assets. Beyond just a wallet, Kibisis is your passport to a world where digital assets become powerful tools.`;

  return (
    <Layout title={siteConfig.tagline} description={description}>
      <Header />

      <Main></Main>
    </Layout>
  );
};

export default IndexPage;
