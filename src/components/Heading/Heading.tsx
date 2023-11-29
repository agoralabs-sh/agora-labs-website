import React, { FC, ReactElement } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps {
  children: ReactElement | string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<IProps> = ({ children, level }: IProps) => {
  switch (level) {
    case 'h1':
      return <h1 className={styles.heading}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.heading}>{children}</h2>;
    case 'h4':
      return <h4 className={styles.heading}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.heading}>{children}</h5>;
    case 'h6':
      return <h6 className={styles.heading}>{children}</h6>;
    case 'h3':
    default:
      return <h3 className={styles.heading}>{children}</h3>;
  }
};

export default Heading;
