import React, { FC, ReactElement } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps {
  children: ReactElement | string;
}

const SectionTitle: FC<IProps> = ({ children }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.square} />
        <h1 className={styles.text}>{children}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
