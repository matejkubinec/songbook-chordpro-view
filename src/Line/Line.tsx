import { cx } from '@emotion/css';
import { FC } from 'react';
import { Line as SongLine } from 'songbook-chordpro';
import Block from '../Block';
import { useTheme } from '../Theme';
import { styles } from './Line.styles';

export interface LineProps {
  line: SongLine;
}

const Line: FC<LineProps> = ({ line }) => {
  const { theme } = useTheme();
  return (
    <div className={cx(styles.Line, theme.lineClass)}>
      {line.blocks.map((block, idx) => (
        <Block key={idx} block={block} />
      ))}
    </div>
  );
};

export default Line;
