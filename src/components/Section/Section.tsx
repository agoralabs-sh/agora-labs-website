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
  let containerClass: string = styles.container__outer;

  if (variant === 'accent') {
    containerClass = clsx(
      styles.container__outer,
      styles['container__outer--accent']
    );
  }

  return (
    <section className={containerClass} id={id}>
      <div className={styles.container__inner}>
        <SectionTitle>{title}</SectionTitle>

        {children}
      </div>
    </section>
  );
};

export default Section;
