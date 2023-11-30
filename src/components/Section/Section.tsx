import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';

// components
import SectionTitle from '@site/src/components/SectionTitle';

// styles
import styles from './styles.module.scss';

interface IProps {
  children: ReactElement;
  id: string;
  title: string;
  variant?: 'accent' | 'primary';
}

const Section: FC<IProps> = ({
  children,
  id,
  title,
  variant = 'primary',
}: IProps) => {
  let containerClass: string = styles.container;

  if (variant === 'accent') {
    containerClass = clsx(styles.container, styles['container--accent']);
  }

  return (
    <section className={containerClass} id={id}>
      <SectionTitle>{title}</SectionTitle>

      {children}
    </section>
  );
};

export default Section;
