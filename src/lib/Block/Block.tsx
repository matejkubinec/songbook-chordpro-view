import { FC } from 'react';
import { Block as SongBlock } from 'songbook-chordpro';
import Chord from '../Chord';
import Lyric from '../Lyric';
import { styles } from './Block.styles';

export interface BlockProps {
  block: SongBlock;
}

const Block: FC<BlockProps> = ({ block }) => {
  return (
    <div className={styles.Block}>
      {!!block.chord && <Chord chord={block.chord} />}
      {!!block.lyric && <Lyric lyric={block.lyric} />}
    </div>
  );
};

export default Block;
