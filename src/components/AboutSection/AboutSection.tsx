import React, { FC } from 'react';

// components
import Section from '@site/src/components/Section';
import Text from '@site/src/components/Text';

// styles
import styles from './styles.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';
import Heading from '@site/src/components/Heading';

type IProps = IDefaultSectionProps;

const AboutSection: FC<IProps> = ({ variant }: IProps) => {
  return (
    <Section id="about" title="About" variant={variant}>
      <div className={styles.container__text}>
        <Text>
          Agora Labs is a forward-thinking Web3 organization committed to
          building tools, applications, and systems that prioritize
          sustainability and empathy for all of humanity.
        </Text>

        <Heading level="h3">Empathy-Driven Innovation</Heading>

        <Text>
          In a world where technology often operates in the background, Agora
          Labs places empathy at the forefront of its design philosophy. Our
          applications are crafted with a keen understanding of diverse user
          needs, ensuring inclusivity and accessibility. Beyond functionality,
          our systems prioritize the human experience, fostering connections and
          enhancing the quality of life for all users.
        </Text>

        <Heading level="h3">Tools for Positive Impact</Heading>

        <Text>
          Agora Labs believes in technology as a force for good. Our suite of
          tools encompasses a wide range of applications, each designed to
          address real-world challenges and contribute to positive social
          change. Whether it's empowering communities through decentralized
          platforms or facilitating sustainable practices through innovative
          applications, our creations aspire to make a tangible, positive impact
          on society.
        </Text>

        <Heading level="h3">
          A Collective of Builders, Creators and Visionaries
        </Heading>

        <Text>
          Agora Labs is more than a technology hub; it's a collective. We invite
          like-minded individuals, organizations, and visionaries to join us on
          this journey. Together, we can shape a digital future that not only
          embraces technological excellence but also stands as a testament to
          our collective responsibility towards sustainability and empathy.
        </Text>
      </div>
    </Section>
  );
};

export default AboutSection;
