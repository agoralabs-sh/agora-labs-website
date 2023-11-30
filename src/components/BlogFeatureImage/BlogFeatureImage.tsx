import React, { FC } from 'react';

// styles
import styles from './styles.module.scss';

// types
import { IAttribution } from './types';

interface IProps {
  attribution?: IAttribution;
  label: string;
  src: string;
}

const BlogFeatureImage: FC<IProps> = ({ attribution, label, src }: IProps) => {
  return (
    <div className={styles['image-container']}>
      {/*image*/}
      <img alt={label} aria-label={label} src={src} />

      {/*attribution*/}
      {attribution && (
        <div className={styles['attribution-container']}>
          {attribution.authorUrl ? (
            <p className={styles['attribution-text']}>
              Image by{` `}
              <a href={attribution.authorUrl} target="_blank">
                {attribution.authorName}
              </a>
            </p>
          ) : (
            <p className={styles['attribution-text']}>
              {`Image by ${attribution.authorName}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogFeatureImage;
