import { FC } from 'react';
import { Line as SongLine } from 'songbook-chordpro';
import Block from '../Block';
import { styles } from './Line.styles';

export interface LineProps {
  line: SongLine;
}

const Line: FC<LineProps> = ({ line }) => {
  return (
    <div className={styles.Line}>
      {line.blocks.map((block, idx) => (
        <Block key={idx} block={block} />
      ))}
    </div>
  );
};

export default Line;
