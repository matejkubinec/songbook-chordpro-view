import { cx } from '@emotion/css';
import { FC } from 'react';
import { Metadata } from 'songbook-chordpro';
import { useTheme } from '../Theme';
import { styles } from './Header.styles';

export interface HeaderProps {
  meta: Metadata;
}

const Header: FC<HeaderProps> = ({ meta }) => {
  const { theme } = useTheme();
  return (
    <div className={cx(styles.Header, theme.headerClass)}>
      {!!meta.title && (
        <div className={cx(styles.Title, theme.headerTitleClass)}>
          {meta.title}
        </div>
      )}
      {!!meta.artist && (
        <div className={cx(styles.Artist, theme.headerArtistClass)}>
          {meta.artist}
        </div>
      )}
    </div>
  );
};

export default Header;
