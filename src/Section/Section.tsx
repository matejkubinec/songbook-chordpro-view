import { cx } from '@emotion/css';
import { FC } from 'react';
import { Section as SongSection } from 'songbook-chordpro';
import Line from '../Line';
import { useTheme } from '../Theme';
import { styles } from './Section.styles';

export interface SectionProps {
  section: SongSection;
}

const Section: FC<SectionProps> = ({ section }) => {
  const { theme } = useTheme();
  return (
    <div className={cx(styles.Section, theme.sectionClass)}>
      {!!section.title && (
        <strong className={cx(styles.Title, theme.sectionTitleClass)}>
          {section.title}
        </strong>
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
