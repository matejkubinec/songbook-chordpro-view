import { FC } from 'react';
import { Song } from 'songbook-chordpro';
import Header from '../Header';
import Section from '../Section';
import { styles } from './SongView.styles';

export interface SongViewProps {
  song: Song;
}

const SongView: FC<SongViewProps> = ({ song }) => {
  return (
    <div className={styles.Root}>
      <Header meta={song.meta} />
      {song.sections.map((section, idx) => (
        <Section key={idx} section={section} />
      ))}
    </div>
  );
};

export default SongView;
