import { cx } from '@emotion/css';
import { FC } from 'react';
import { Block as SongBlock } from 'songbook-chordpro';
import Chord from '../Chord';
import Lyric from '../Lyric';
import { useTheme } from '../Theme';
import { styles } from './Block.styles';

export interface BlockProps {
  block: SongBlock;
}

const Block: FC<BlockProps> = ({ block }) => {
  const { theme } = useTheme();

  return (
    <div className={cx(styles.Block, theme.blockClass)}>
      {!!block.chord && <Chord chord={block.chord} />}
      {!!block.lyric && <Lyric lyric={block.lyric} />}
    </div>
  );
};

export default Block;
