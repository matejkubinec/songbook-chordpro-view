import { FC } from 'react';
import { styles } from './Lyric.test';

export interface LyricProps {
  lyric: string;
}

const Lyric: FC<LyricProps> = ({ lyric }) => {
  return <div className={styles.Lyric}>{lyric}</div>;
};

export default Lyric;
