import { cx } from '@emotion/css';
import { FC } from 'react';
import { useTheme } from '../Theme';
import { styles } from './Chord.styles';

export interface ChordProps {
  chord: string;
}

const Chord: FC<ChordProps> = ({ chord }) => {
  const { theme } = useTheme();
  return (
    <div className={cx(styles.Wrapper, theme.chordWrapperClass)}>
      <strong className={cx(styles.Chord, theme.chordClass)}> {chord} </strong>
    </div>
  );
};

export default Chord;
