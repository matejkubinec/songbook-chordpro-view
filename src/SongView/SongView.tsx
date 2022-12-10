import { cx } from '@emotion/css';
import { FC } from 'react';
import { Song } from 'songbook-chordpro';
import Header from '../Header';
import Section from '../Section';
import { ThemeProvider, useTheme } from '../Theme';
import { Theme } from '../types';
import { styles } from './SongView.styles';

export interface SongViewProps {
  song: Song;
  theme?: Theme;
}

const SongView: FC<SongViewProps> = ({ song, theme = {} }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={cx(styles.Root, theme.rootClass)}>
        <Header meta={song.meta} />
        {song.sections.map((section, idx) => (
          <Section key={idx} section={section} />
        ))}
      </div>
    </ThemeProvider>
  );
};

export default SongView;
