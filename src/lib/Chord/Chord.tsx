import { FC } from 'react';
import { styles } from './Chord.styles';

export interface ChordProps {
  chord: string;
}

const Chord: FC<ChordProps> = ({ chord }) => {
  return (
    <div className={styles.Wrapper}>
      <strong className={styles.Chord}> {chord} </strong>
    </div>
  );
};

export default Chord;
