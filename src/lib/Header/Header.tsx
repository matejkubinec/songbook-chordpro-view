import { FC } from 'react';
import { Metadata } from 'songbook-chordpro';
import { styles } from './Header.styles';

export interface HeaderProps {
  meta: Metadata;
}

const Header: FC<HeaderProps> = ({ meta }) => {
  return (
    <div className={styles.Header}>
      {!!meta.title && <div className={styles.Title}>{meta.title}</div>}
      {!!meta.artist && <div className={styles.Artist}>{meta.artist}</div>}
    </div>
  );
};

export default Header;
