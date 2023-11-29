import React, { FC, ReactElement } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps {
  bold?: boolean;
  children: ReactElement | string;
}

const Text: FC<IProps> = ({ children, bold = false }: IProps) => {
  let className: string = styles.text;

  if (bold) {
    className = `${className} ${styles['text--bold']}`;
  }

  return <p className={className}>{children}</p>;
};

export default Text;
