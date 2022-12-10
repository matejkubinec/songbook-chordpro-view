import { cx } from '@emotion/css';
import { FC } from 'react';
import { useTheme } from '../Theme';
import { styles } from './Lyric.styles';

export interface LyricProps {
  lyric: string;
}

const Lyric: FC<LyricProps> = ({ lyric }) => {
  const { theme } = useTheme();
  return <div className={cx(styles.Lyric, theme.lyricClass)}>{lyric}</div>;
};

export default Lyric;
