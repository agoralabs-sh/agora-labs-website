import React, { FC, PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

const Main: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <main className={styles.main}>{children}</main>
);

export default Main;
