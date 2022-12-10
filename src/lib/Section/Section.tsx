import { FC } from 'react';
import { Section as SongSection } from 'songbook-chordpro';
import Line from '../Line';
import { styles } from './Section.styles';

export interface SectionProps {
  section: SongSection;
}

const Section: FC<SectionProps> = ({ section }) => {
  return (
    <div className={styles.Section}>
      {!!section.title && (
        <strong className={styles.Title}>{section.title}</strong>
      )}
      <div>
        {section.lines.map((line, idx) => (
          <Line key={idx} line={line} />
        ))}
      </div>
    </div>
  );
};

export default Section;
